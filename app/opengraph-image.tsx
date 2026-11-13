import { ImageResponse } from "next/og";
import { personal, hero } from "@/lib/data";

export const runtime = "edge";
export const alt = `${personal.name} — Software Engineer`;
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
          padding: "72px 88px",
          background: "linear-gradient(180deg, #050508 0%, #14060f 60%, #30091a 100%)",
          color: "#edecf4",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: 90,
            top: 95,
            width: 440,
            height: 440,
            borderRadius: 440,
            background: "linear-gradient(180deg, #ff5560 0%, #ff2a45 55%, #c1002b 100%)",
            display: "flex",
          }}
        />

        <div
          style={{
            display: "flex",
            fontSize: 20,
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "#2ee6ff",
            fontFamily: "monospace",
          }}
        >
          Neo-Miami / {personal.location}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div
            style={{
              display: "flex",
              fontSize: 104,
              fontWeight: 800,
              lineHeight: 1,
              letterSpacing: "-0.02em",
              textTransform: "uppercase",
              color: "#ffffff",
            }}
          >
            {personal.name}
          </div>
          <div style={{ display: "flex", fontSize: 30, lineHeight: 1.4, maxWidth: 860 }}>
            {hero.tagline}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 21,
              color: "#ffffff",
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
