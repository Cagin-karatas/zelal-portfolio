import { ImageResponse } from "next/og";

import { siteIdentity } from "@/content/site";
import tailwindConfig from "@/tailwind.config";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

const colors = tailwindConfig.theme.colors;

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        alignItems: "center",
        backgroundColor: colors.paper,
        color: colors.accent,
        display: "flex",
        fontFamily: "Georgia",
        fontSize: 16,
        height: "100%",
        justifyContent: "center",
        width: "100%",
      }}
    >
      {siteIdentity.monogram}
    </div>,
    size,
  );
}
