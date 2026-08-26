import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import prettierConfig from "eslint-config-prettier";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  // Disables every ESLint stylistic rule Prettier already owns, so the
  // two tools never disagree about formatting. Kept last so it can
  // override anything above it.
  prettierConfig,
  {
    // next-env.d.ts is generated and overwritten by Next.js itself — it
    // isn't code this project owns, so it isn't linted as if it were.
    ignores: [
      ".next/**",
      "public/**",
      "content/generated/**",
      "next-env.d.ts",
    ],
  },
];

export default eslintConfig;
