import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import sassPlugin from 'vite-plugin-sass';
import eslintPlugin from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    sassPlugin(),
    eslintPlugin({
      include: ['./src/**/*.jsx', './src/**/*.js'],
      exclude: ['node_modules/**']
    })
  ],
})
