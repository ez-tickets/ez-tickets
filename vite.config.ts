/// <reference types="vite/client" />

import { resolve } from "node:path";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), vanillaExtractPlugin()],
  resolve: {
    alias: [
      { find: "@", replacement: resolve(__dirname, "./src") },
      {
        find: "@tabler/icons-react",
        replacement: resolve(
          __dirname,
          "./node_modules/@tabler/icons-react/dist/esm/icons/index.mjs",
        ),
      },
    ],
  },
});
