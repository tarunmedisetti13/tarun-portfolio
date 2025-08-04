import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
<<<<<<< HEAD
  base: "/tarun-portfolio/",
=======
  base: "/",
>>>>>>> f8db296ad896e7c0eb9d05b46ee07a1f25f905f7
})
