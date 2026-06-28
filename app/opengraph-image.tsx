import { ImageResponse } from "next/og";
import fs from "fs";
import path from "path";

export const alt = "Ertuğrul Likos — Software Developer & Computer Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const profileBuffer = fs.readFileSync(
    path.join(process.cwd(), "public", "profile.jpeg")
  );
  const profileSrc = `data:image/jpeg;base64,${profileBuffer.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          background: "#09090b",
          padding: "80px",
          gap: "64px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Subtle glow */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 800,
            height: 800,
            background: "radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 65%)",
            borderRadius: "50%",
          }}
        />

        {/* Profile photo */}
        <img
          src={profileSrc}
          style={{
            width: 220,
            height: 220,
            borderRadius: "50%",
            objectFit: "cover",
            border: "4px solid #8b5cf6",
            flexShrink: 0,
          }}
        />

        {/* Text */}
        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          <div
            style={{
              color: "#a78bfa",
              fontSize: 26,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              fontFamily: "monospace",
            }}
          >
            Software Developer
          </div>
          <div
            style={{
              color: "#ffffff",
              fontSize: 68,
              fontWeight: 700,
              lineHeight: 1.1,
            }}
          >
            Ertuğrul Likos
          </div>
          <div style={{ color: "#a1a1aa", fontSize: 28 }}>
            React · React Native · Next.js
          </div>
          <div style={{ color: "#3f3f46", fontSize: 22, marginTop: 8 }}>
            likosertugrul.com
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
