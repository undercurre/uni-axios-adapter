import { defineConfig } from 'vite';

// https://vitejs.dev/config/
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [dts()],
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'uni-adapter'
    },
    rollupOptions: {
      output: {
        format: 'esm'
      }
    }
  }
});
