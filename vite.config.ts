import { defineConfig } from "vite";
import solid from "vite-plugin-solid";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [solid(), tailwindcss()],
  base: "./",
  build: {
    outDir: "docs",
    emptyOutDir: true,
    target: "esnext",
    cssMinify: "lightningcss",
  },
});
