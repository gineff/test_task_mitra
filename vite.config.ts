import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  publicDir: './src/assets',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@vars': path.resolve(__dirname, './src/vars'),
      '@bootstrap': path.resolve(
        __dirname,
        'node_modules/bootstrap/scss/bootstrap'
      ),
    },
  },
})
