import path from "node:path";
import { createRequire } from "node:module";

import { defineConfig, searchForWorkspaceRoot } from "vite";
import react from "@vitejs/plugin-react";
import { viteStaticCopy } from "vite-plugin-static-copy";

const require = createRequire(import.meta.url);
const cMapsDir = path.join(path.dirname(require.resolve("pdfjs-dist/package.json")), "cmaps");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: cMapsDir,
          dest: "",
        },
      ],
    }),
  ],
  server: {
    fs: {
      // Allow serving files from one level up to the project root
      allow: [
        "..",
        // search up for workspace root,
        searchForWorkspaceRoot(process.cwd()),
        // your custom rules
        "/PortfolioV2.0/public",
        "/PortfolioV2.0/public/resume.pdf",
      ],
    },
  },
});
