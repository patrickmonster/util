import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    commonjsOptions: {
      include: ["tailwind.config.js", "node_modules/**"],
    },
  },
  optimizeDeps: {
    include: ["tailwind-config"],
  },
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: "tailwind-config",
        replacement: path.resolve(__dirname, "./tailwind.config.js"),
      },
      { find: "@", replacement: path.resolve(__dirname, "./src") },
    ],
    // {
    //   "tailwind-config": path.resolve(__dirname, "./tailwind.config.js"),
    //   "*": path.resolve(__dirname, "./src"),
    // },
  },
});
