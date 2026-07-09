import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#FAFAF7",
        }}
      >
        <svg width="140" height="140" viewBox="0 0 120 120">
          <path
            d="M 95 38 C 110 58, 100 96, 70 102 C 38 108, 16 86, 18 58 C 20 32, 48 14, 78 22 C 92 26, 100 36, 100 44"
            fill="none"
            stroke="#8B2635"
            strokeWidth="8"
            strokeLinecap="round"
          />
        </svg>
      </div>
    ),
    { ...size },
  );
}
