import { defineConfig } from "vite";
const path = require("path");

import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      vue: "vue/dist/vue.esm-bundler.js",
    },
  },
  base: "./",
  build: {
    outDir: "./docs",
    emptyOutDir: false,
    rollupOptions: {
      external: ["vue"],
      output: {
        paths: {
          vue: "https://unpkg.com/vue@3/dist/vue.esm-browser.js",
        },
      },
    },
  },
});
