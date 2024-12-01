import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Ustawienia preprocessora
  preprocess: preprocess({
    postcss: true
  }),

  kit: {
    // Zmieniamy adapter na static, odpowiedni dla Vercel
    adapter: adapter({
      // Możesz dodać fallback, jeśli aplikacja ma działać jako SPA (Single Page Application)
      // fallback: 'index.html',
    })
  }
};

export default config;
