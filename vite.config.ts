import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      {
        find: "@components",
        replacement: path.resolve(__dirname, "src", "components"),
      },
      {
        find: "@views",
        replacement: path.resolve(__dirname, "src", "views"),
      },
      {
        find: "@templates",
        replacement: path.resolve(__dirname, "src", "components", "templates"),
      },
      {
        find: "@mutations",
        replacement: path.resolve(__dirname, "src", "mutations"),
      },
      {
        find: "@queries",
        replacement: path.resolve(__dirname, "src", "queries"),
      },
      {
        find: "@entities",
        replacement: path.resolve(__dirname, "src", "entities"),
      },
      {
        find: "@assets",
        replacement: path.resolve(__dirname, "src", "assets"),
      },
    ],
  },
  plugins: [
    react(),
    VitePWA({
      manifest: {
        name: "Amigo Pet",
        description: "My Awesome App description",
        theme_color: "#ffffff",
        start_url: "/",
        icons: [
          {
            src: "pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
      registerType: "autoUpdate",
      devOptions: {
        enabled: true,
      },
      workbox: {
        mode: process.env.NODE_ENV,
      },
    }),
  ],
  // define: {
  //   "process.env.NODE_ENV": '"development"',
  // },
});
