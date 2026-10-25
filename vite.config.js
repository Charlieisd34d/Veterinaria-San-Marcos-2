import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./src/setupTests.js'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html', 'lcov'],
      reportsDirectory: './coverage',
      exclude: [
        'node_modules/**',
        'dist/**',
        'public/**',
        'src/data/**',
        'src/**/*.test.{js,jsx,ts,tsx}',
        'src/main.jsx',
        'src/App.jsx',
      ],
      include: ['src/**/*.{js,jsx}'],
    },
  },
})
