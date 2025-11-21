import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [react()],
        base: '/https://github.com/ryanhollingsworth123/recipe-generator/tree/gh-pages/'
      },
    }),
  ],
})
