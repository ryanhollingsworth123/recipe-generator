import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/https://ryanhollingsworth123.github.io/recipe-generator/"
});