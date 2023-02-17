import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/

export default defineConfig({
  base:"/react-58-vite-zustand-expense-tracker/",
  plugins: [react()],
})
