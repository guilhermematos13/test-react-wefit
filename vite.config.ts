import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),
      "@api": `${path.resolve(__dirname, "./src/api/")}`,
      "@assets": `${path.resolve(__dirname, "./src/assets/")}`,
      "@components": `${path.resolve(__dirname, "./src/components/")}`,
      "@context": `${path.resolve(__dirname, "./src/context/")}`,
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@partials": path.resolve(__dirname, "./src/partials"),
      "@styles": `${path.resolve(__dirname, "./src/styles")}`,
      "@utils": `${path.resolve(__dirname, "./src/utils")}`,
    },
  },
  plugins: [react()],
  server: {
    port: 3000,
},
})
