import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#050508",
        }}
      >
        <div
          style={{
            width: 22,
            height: 22,
            borderRadius: 22,
            background: "#ff2a45",
            display: "flex",
          }}
        />
      </div>
    ),
    { ...size },
  );
}
