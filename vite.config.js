import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// ✅ Replace "prayers-times" with your actual repo or subfolder name
export default defineConfig({
  plugins: [react()],
  base: "/", 
});
