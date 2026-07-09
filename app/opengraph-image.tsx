import { ImageResponse } from "next/og";
import { personal, hero } from "@/lib/data";

export const runtime = "edge";
export const alt = `${personal.name} — Computer Science Student & Software Engineer`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px 96px",
          background: "#FAFAF7",
          color: "#1A1A1A",
          fontFamily: "serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 72,
            right: 96,
            width: 180,
            height: 180,
            display: "flex",
          }}
        >
          <svg width="180" height="180" viewBox="0 0 120 120">
            <path
              d="M 95 38 C 110 58, 100 96, 70 102 C 38 108, 16 86, 18 58 C 20 32, 48 14, 78 22 C 92 26, 100 36, 100 44"
              fill="none"
              stroke="#8B2635"
              strokeWidth="3"
              strokeLinecap="round"
              opacity="0.6"
            />
          </svg>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 20,
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "#6B6B6B",
            fontFamily: "monospace",
          }}
        >
          {personal.location}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
          <div
            style={{
              display: "flex",
              fontSize: 96,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              color: "#1A1A1A",
            }}
          >
            {personal.name}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 32,
              lineHeight: 1.4,
              color: "#1A1A1A",
              maxWidth: 900,
            }}
          >
            {hero.tagline}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 22,
              color: "#8B2635",
              fontFamily: "monospace",
              letterSpacing: "0.05em",
            }}
          >
            {hero.status}
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
