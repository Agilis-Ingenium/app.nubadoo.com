import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

export default defineConfig({

  server: {
    proxy: {
      "/v1": {
        target: "http://localhost:7060/v1/",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/v1/, ""),
      },
    },
  },

  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
