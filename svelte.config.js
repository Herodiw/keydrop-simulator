import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: preprocess({
    postcss: true
  }),

  kit: {
    adapter: adapter({
      // Jeśli chcesz mieć fallback dla aplikacji SPA (Single Page Application), możesz dodać tę opcję:
      // fallback: 'index.html',
    })
  }
};

export default config;
