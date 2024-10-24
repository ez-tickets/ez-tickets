/// <reference types="vitest/config" />

import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";
import {vanillaExtractPlugin} from "@vanilla-extract/vite-plugin";

export default defineConfig({
  plugins: [react(), vanillaExtractPlugin()],
  test: {
    globals: true,
    include: ['tests/**/*.test.tsx'],
    environment: 'jsdom',
    setupFiles: "./tests/setup.ts",
  },
});
