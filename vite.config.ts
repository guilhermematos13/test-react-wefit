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
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@types": `${path.resolve(__dirname, "./src/@types")}`,
      "@styles": `${path.resolve(__dirname, "./src/styles")}`,
    },
  },
  plugins: [react()],
  server: {
    port: 3000,
},
})
