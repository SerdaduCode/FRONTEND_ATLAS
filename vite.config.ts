import path from 'path';
import preact from '@preact/preset-vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [preact()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});

// import { defineConfig } from 'vite'
// import preact from '@preact/preset-vite'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [preact()],
// })
