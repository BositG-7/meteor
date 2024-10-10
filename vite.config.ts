import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    port: 3000,
  },

  optimizeDeps: {
    include: ["@comfi/kit", "@mui/material"],
  },
});
