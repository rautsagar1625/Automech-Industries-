import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

export const alt = "Automech Industries - Industrial Steel Fabrication, Dahigaon, Maharashtra";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "#14283F",
        padding: "80px",
        color: "#ffffff",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          width: "100%",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 48,
              fontWeight: 800,
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              color: "#ffffff",
            }}
          >
            Automech
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 18,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#AEBCCB",
              marginTop: 8,
            }}
          >
            Industries · Est. {siteConfig.company.foundedYear}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            backgroundColor: "#1765AD",
            color: "#ffffff",
            padding: "10px 24px",
            fontSize: 16,
            fontWeight: 600,
            borderRadius: 4,
          }}
        >
          Dahigaon, Solapur · Maharashtra
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", maxWidth: "980px" }}>
        <div
          style={{
            display: "flex",
            fontSize: 54,
            fontWeight: 700,
            lineHeight: 1.15,
            color: "#ffffff",
          }}
        >
          Industrial Steel Fabrication & Equipment Support Structures
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 22,
            color: "#AEBCCB",
            marginTop: 24,
            lineHeight: 1.45,
          }}
        >
          Boiler and filtration support frames, industrial platforms, walkways, stairs, and on-site
          assembly built to your engineering drawings.
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          borderTop: "1px solid #2D4662",
          paddingTop: 32,
          fontSize: 18,
          color: "#7CB4E8",
        }}
      >
        <div style={{ display: "flex" }}>
          Continuous operation since 1997 · Works in Dahigaon, Solapur
        </div>
        <div style={{ display: "flex" }}>automechindustries.in</div>
      </div>
    </div>,
    {
      ...size,
    }
  );
}
