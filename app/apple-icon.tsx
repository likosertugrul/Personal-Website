import { ImageResponse } from "next/og";

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
          background: "linear-gradient(135deg, #5b21b6, #4c1d95)",
          borderRadius: "40px",
          fontFamily: "sans-serif",
        }}
      >
        <span style={{ color: "#c4b5fd", fontSize: 80, fontWeight: 700 }}>
          EL
        </span>
      </div>
    ),
    { ...size }
  );
}
