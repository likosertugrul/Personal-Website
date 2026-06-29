import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
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
          background: "linear-gradient(135deg, #5b21b6, #4c1d95)",
          borderRadius: "14px",
          fontFamily: "sans-serif",
        }}
      >
        <span style={{ color: "#c4b5fd", fontSize: 28, fontWeight: 700 }}>
          EL
        </span>
      </div>
    ),
    { ...size }
  );
}
