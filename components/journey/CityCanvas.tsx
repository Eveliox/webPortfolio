"use client";

import { useEffect, useRef } from "react";
import type { MotionValue } from "framer-motion";

type Beacon = { x: number; y: number; phase: number };
type Layer = { canvas: HTMLCanvasElement; beacons: Beacon[] };
type LayerOptions = {
  seed: number;
  color: string;
  minW: number;
  maxW: number;
  minH: number;
  maxH: number;
  cell: number;
  lit: number;
  alpha: number;
  signs: boolean;
  deep: boolean;
  track: boolean;
  heightFactor: number;
};

const PAD = 60;
const SIGNS = ["データ", "夜勤", "ネオ", "コード", "起動", "信号", "システム", "マイアミ", "設計"];
const TRACK_Y = 0.8;

// Small seeded PRNG so the skyline is identical on every visit.
function mulberry(seed: number) {
  return () => {
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function buildLayer(w: number, h: number, o: LayerOptions): Layer {
  const W = w + PAD * 2;
  const H = Math.ceil(h * o.heightFactor);
  const canvas = document.createElement("canvas");
  canvas.width = W;
  canvas.height = H;
  const g = canvas.getContext("2d")!;
  const rand = mulberry(o.seed);
  const beacons: Beacon[] = [];

  // Everything below the skyline is solid, so the layer can rise like a wall.
  g.fillStyle = o.color;
  g.fillRect(0, h, W, H - h);

  let x = -10;
  while (x < W) {
    const bw = o.minW + rand() * (o.maxW - o.minW);
    const bh = (o.minH + rand() * rand() * (o.maxH - o.minH)) * h;
    const top = h - bh;
    g.globalAlpha = 1;
    g.fillStyle = o.color;
    g.fillRect(x, top, bw + 1, bh + 2);

    if (rand() < 0.45) {
      const cw = bw * (0.4 + rand() * 0.3);
      const ch = 8 + rand() * 26;
      g.fillRect(x + (bw - cw) / 2, top - ch, cw, ch);
      if (rand() < 0.6) {
        const ah = 14 + rand() * 40;
        g.fillRect(x + bw / 2 - 1, top - ch - ah, 2, ah);
        beacons.push({ x: x + bw / 2, y: top - ch - ah, phase: rand() * 6.28 });
      }
    }

    const fadeDepth = h * 0.8;
    const depth = o.deep ? bh + fadeDepth : bh;
    for (let wy = top + 8; wy < top + depth - 6; wy += o.cell * 1.5) {
      for (let wx = x + 5; wx < x + bw - 5 - o.cell * 0.5; wx += o.cell) {
        if (rand() >= o.lit) continue;
        const fade = wy > h ? Math.max(0, 1 - (wy - h) / fadeDepth) : 1;
        const pick = rand();
        g.fillStyle = pick < 0.6 ? "#ffd9a0" : pick < 0.86 ? "#7fefff" : "#ff6a7c";
        g.globalAlpha = o.alpha * (0.35 + rand() * 0.65) * fade;
        g.fillRect(wx, wy, o.cell * 0.5, o.cell * 0.7);
      }
    }
    g.globalAlpha = 1;

    if (o.signs && bw > 44 && rand() < 0.55) {
      const text = SIGNS[Math.floor(rand() * SIGNS.length)];
      const fs = Math.max(12, Math.min(22, bw * 0.26));
      const sw = fs + 12;
      const sh = text.length * (fs + 3) + 12;
      if (sh < bh - 24) {
        const sx = x + (rand() < 0.5 ? 5 : bw - sw - 5);
        const sy = top + 14 + rand() * 18;
        const col = rand() < 0.6 ? "#ff2a45" : "#2ee6ff";
        g.save();
        g.fillStyle = "rgba(5,5,8,.9)";
        g.fillRect(sx, sy, sw, sh);
        g.shadowColor = col;
        g.shadowBlur = 16;
        g.strokeStyle = col;
        g.lineWidth = 1.5;
        g.strokeRect(sx, sy, sw, sh);
        g.shadowBlur = 10;
        g.fillStyle = col;
        g.font = `700 ${fs}px "Yu Gothic", "Hiragino Sans", "Noto Sans JP", sans-serif`;
        g.textAlign = "center";
        g.textBaseline = "top";
        [...text].forEach((ch, i) => g.fillText(ch, sx + sw / 2, sy + 7 + i * (fs + 3)));
        g.restore();
      }
    }

    x += bw + (rand() < 0.3 ? rand() * 12 : 0);
  }

  if (o.track) {
    const ty = h * TRACK_Y;
    g.fillStyle = "#06060b";
    g.fillRect(0, ty, W, 5);
    for (let px = 20; px < W; px += 96) g.fillRect(px, ty, 6, h - ty);
  }

  return { canvas, beacons };
}

export function CityCanvas({ progress }: { progress: MotionValue<number> }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const sun = document.createElement("canvas");
    const sunCtx = sun.getContext("2d")!;

    let w = 0;
    let h = 0;
    let dpr = 1;
    let far: Layer | null = null;
    let mid: Layer | null = null;
    let near: Layer | null = null;
    let rain: { x: number; y: number; len: number; speed: number; alpha: number }[] = [];
    let raf = 0;
    let visible = true;
    let last = 0;
    let mx = 0;
    let targetMx = 0;

    const build = () => {
      const rect = canvas.getBoundingClientRect();
      w = Math.max(1, Math.round(rect.width));
      h = Math.max(1, Math.round(rect.height));
      dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);

      const small = w < 700;
      far = buildLayer(w, h, {
        seed: 11, color: "#1b1226", minW: small ? 22 : 34, maxW: small ? 60 : 96, minH: 0.3, maxH: 0.62,
        cell: 7, lit: 0.12, alpha: 0.3, signs: false, deep: false, track: false, heightFactor: 1.1,
      });
      mid = buildLayer(w, h, {
        seed: 23, color: "#0f0d19", minW: small ? 30 : 46, maxW: small ? 80 : 130, minH: 0.22, maxH: 0.5,
        cell: 9, lit: 0.16, alpha: 0.6, signs: !small, deep: false, track: true, heightFactor: 1.3,
      });
      near = buildLayer(w, h, {
        seed: 42, color: "#050508", minW: small ? 46 : 70, maxW: small ? 120 : 190, minH: 0.12, maxH: 0.36,
        cell: 12, lit: 0.2, alpha: 0.95, signs: true, deep: true, track: false, heightFactor: 2.12,
      });

      const rand = mulberry(7);
      rain = Array.from({ length: small ? 60 : 150 }, () => ({
        x: rand() * (w + 200),
        y: rand() * h,
        len: 10 + rand() * 22,
        speed: 0.5 + rand() * 0.7,
        alpha: 0.08 + rand() * 0.2,
      }));
    };

    const drawSun = (R: number, t: number) => {
      const size = Math.ceil(R * 2 * dpr);
      if (sun.width !== size) {
        sun.width = size;
        sun.height = size;
      }
      sunCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
      sunCtx.globalCompositeOperation = "source-over";
      sunCtx.clearRect(0, 0, R * 2, R * 2);
      const grad = sunCtx.createLinearGradient(0, 0, 0, R * 2);
      grad.addColorStop(0, "#ff5560");
      grad.addColorStop(0.55, "#ff2a45");
      grad.addColorStop(1, "#c1002b");
      sunCtx.fillStyle = grad;
      sunCtx.beginPath();
      sunCtx.arc(R, R, R, 0, Math.PI * 2);
      sunCtx.fill();
      // Horizontal cuts drift down the lower half of the disc.
      sunCtx.globalCompositeOperation = "destination-out";
      const bands = 7;
      for (let i = 0; i < bands; i++) {
        const k = (i / bands + t * 0.00002) % 1;
        const y = R * 1.08 + k * R * 0.92;
        sunCtx.fillRect(0, y, R * 2, 1.5 + k * R * 0.075);
      }
    };

    const drawBeacons = (layer: Layer, ox: number, oy: number, t: number) => {
      for (const b of layer.beacons) {
        const a = Math.sin(t * 0.003 + b.phase);
        if (a < 0.2) continue;
        const bx = b.x + ox;
        const by = b.y + oy;
        ctx.fillStyle = `rgba(255,42,69,${0.25 * a})`;
        ctx.beginPath();
        ctx.arc(bx, by, 6, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = `rgba(255,120,130,${a})`;
        ctx.fillRect(bx - 1, by - 1, 2.5, 2.5);
      }
    };

    const draw = (t: number, dt: number) => {
      if (!far || !mid || !near) return;
      const p = Math.min(1, Math.max(0, progress.get()));
      const e = p * p * (3 - 2 * p);
      mx += (targetMx - mx) * 0.05;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const sky = ctx.createLinearGradient(0, 0, 0, h);
      sky.addColorStop(0, "#050508");
      sky.addColorStop(0.45, "#14060f");
      sky.addColorStop(0.78, "#30091a");
      sky.addColorStop(1, "#14060f");
      ctx.fillStyle = sky;
      ctx.fillRect(0, 0, w, h);

      const R = Math.min(w * 0.42, h * 0.34);
      const cx = w / 2 - mx * 5;
      const cy = h * 0.43 + e * h * 0.46;
      const glow = ctx.createRadialGradient(cx, cy, R * 0.8, cx, cy, R * 2.5);
      glow.addColorStop(0, "rgba(255,42,69,.42)");
      glow.addColorStop(1, "rgba(255,42,69,0)");
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, w, h);
      drawSun(R, t);
      ctx.drawImage(sun, cx - R, cy - R, R * 2, R * 2);

      const farX = -PAD + mx * 6;
      const farY = -e * h * 0.04;
      ctx.drawImage(far.canvas, farX, farY);
      drawBeacons(far, farX, farY, t);

      const midX = -PAD + mx * 14;
      const midY = -e * h * 0.22;
      ctx.drawImage(mid.canvas, midX, midY);
      drawBeacons(mid, midX, midY, t);

      // The night line: a lit train crossing the elevated track.
      const cars = 9;
      const carW = 36;
      const trainLen = cars * (carW + 3);
      const loop = w + PAD * 2 + trainLen + 500;
      const tx = ((t * 0.11) % loop) - trainLen + midX;
      const ty = h * TRACK_Y + midY - 10;
      for (let i = 0; i < cars; i++) {
        const x = tx + i * (carW + 3);
        ctx.fillStyle = "#0b0b14";
        ctx.fillRect(x, ty, carW, 10);
        ctx.fillStyle = "rgba(255,217,160,.9)";
        ctx.fillRect(x + 3, ty + 3, carW - 6, 3);
      }
      ctx.fillStyle = "rgba(46,230,255,.9)";
      ctx.fillRect(tx + trainLen - 2, ty + 4, 4, 3);

      ctx.lineWidth = 1;
      for (const r of rain) {
        if (dt) {
          r.y += r.speed * dt;
          r.x -= r.speed * dt * 0.18;
          if (r.y > h + 30) {
            r.y = -30;
            r.x = Math.random() * (w + 200);
          }
        }
        ctx.strokeStyle = `rgba(170,235,255,${r.alpha})`;
        ctx.beginPath();
        ctx.moveTo(r.x, r.y);
        ctx.lineTo(r.x - r.len * 0.18, r.y + r.len);
        ctx.stroke();
      }

      const nearX = -PAD + mx * 26;
      const nearY = -e * h * 1.06;
      ctx.drawImage(near.canvas, nearX, nearY);
      drawBeacons(near, nearX, nearY, t);
    };

    const frame = (t: number) => {
      const dt = last ? Math.min(48, t - last) : 16;
      last = t;
      draw(t, dt);
      if (visible) raf = requestAnimationFrame(frame);
    };

    const start = () => {
      cancelAnimationFrame(raf);
      last = 0;
      if (reduce) draw(0, 0);
      else raf = requestAnimationFrame(frame);
    };

    build();
    start();

    const resize = new ResizeObserver(() => {
      build();
      if (reduce || !visible) draw(0, 0);
    });
    resize.observe(canvas);

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) start();
      else cancelAnimationFrame(raf);
    });
    io.observe(canvas);

    const onPointer = (ev: PointerEvent) => {
      if (ev.pointerType === "mouse") targetMx = (ev.clientX / window.innerWidth - 0.5) * 2;
    };
    window.addEventListener("pointermove", onPointer, { passive: true });
    const off = reduce ? progress.on("change", () => draw(0, 0)) : undefined;

    return () => {
      cancelAnimationFrame(raf);
      resize.disconnect();
      io.disconnect();
      window.removeEventListener("pointermove", onPointer);
      off?.();
    };
  }, [progress]);

  return <canvas ref={ref} className="city" aria-hidden="true" />;
}
