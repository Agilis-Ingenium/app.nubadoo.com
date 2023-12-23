import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

export default defineConfig(({ command, mode, isSsrBuild, isPreview }) => {
  if (command === "serve") {
    return {
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
    };
  } else {
    // command === 'build'
    return {
      server: {
        proxy: {
          "/v1": {
            target: "https://api.nubadoo.com/v1/",
            changeOrigin: true,
            secure: true,
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
    };
  }
});
