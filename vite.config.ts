import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open: true,
  },
  resolve: {
    alias: {
      "@assets": new URL("./src/assets", import.meta.url).pathname,
      "@cmp": new URL("./src/components", import.meta.url).pathname,
      "@constants": new URL("./src/constants", import.meta.url).pathname,
      "@hooks": new URL("./src/hooks", import.meta.url).pathname,
      "@contexts": new URL("./src/contexts", import.meta.url).pathname,
      "@pages": new URL("./src/pages", import.meta.url).pathname,
      "@utils": new URL("./src/utils", import.meta.url).pathname,
    },
  },
});
