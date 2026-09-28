import { ImageResponse } from "next/og";

import { siteIdentity } from "@/content/site";
import tailwindConfig from "@/tailwind.config";

export const alt = "Zelal Günay — Visual Storyteller";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

const colors = tailwindConfig.theme.colors;

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        alignItems: "stretch",
        backgroundColor: colors.paper,
        backgroundImage: `radial-gradient(circle at 70% 44%, ${colors.accent}1F, transparent 46%)`,
        color: colors.ink,
        display: "flex",
        flexDirection: "column",
        height: "100%",
        justifyContent: "space-between",
        padding: "64px 72px",
        position: "relative",
        width: "100%",
      }}
    >
      <div style={{ alignItems: "center", display: "flex", justifyContent: "space-between" }}>
        <div
          style={{
            color: colors.accent,
            display: "flex",
            fontFamily: "Georgia",
            fontSize: 34,
          }}
        >
          {siteIdentity.monogram}
        </div>
        <div
          style={{
            color: colors["ink-soft"],
            display: "flex",
            fontFamily: "Arial",
            fontSize: 14,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
          }}
        >
          {siteIdentity.location}
        </div>
      </div>

      <div style={{ alignItems: "flex-end", display: "flex", justifyContent: "space-between" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontFamily: "Georgia",
              fontSize: 112,
              letterSpacing: "-0.04em",
              lineHeight: 0.86,
            }}
          >
            ZELAL
          </div>
          <div
            style={{
              display: "flex",
              fontFamily: "Georgia",
              fontSize: 112,
              letterSpacing: "-0.04em",
              lineHeight: 0.86,
            }}
          >
            GÜNAY
          </div>
        </div>

        <div
          style={{
            borderLeft: `1px solid ${colors.rule}`,
            display: "flex",
            fontFamily: "Georgia",
            fontSize: 30,
            lineHeight: 1.25,
            maxWidth: 330,
            paddingLeft: 32,
          }}
        >
          {siteIdentity.slogan}
        </div>
      </div>

      <div
        style={{
          borderTop: `1px solid ${colors.rule}`,
          color: colors["ink-soft"],
          display: "flex",
          fontFamily: "Arial",
          fontSize: 14,
          justifyContent: "space-between",
          letterSpacing: "0.16em",
          paddingTop: 20,
          textTransform: "uppercase",
        }}
      >
        <div style={{ display: "flex" }}>Visual Storyteller · Director · Screenwriter</div>
        <div style={{ color: colors.accent, display: "flex" }}>01 → 04</div>
      </div>
    </div>,
    size,
  );
}
