import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import path from 'path';
const config: UserConfig = {
  plugins: [sveltekit()],
  resolve: {
    alias: {
      src: path.resolve('./src'), 
      $components: path.resolve('src/components'),
      $static: path.resolve('static'),
      $assets: path.resolve('src/assets'),
      '$lib/server': path.resolve('src/lib/server')
    },
    preserveSymlinks: false
  },
  server: {
    fs: {
      allow: ['..']
    }
  }
};

export default config;
