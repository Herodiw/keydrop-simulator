import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Ustawienia preprocessora
  preprocess: preprocess({
    postcss: true
  }),

  kit: {
    // Zmiana adaptera na static, odpowiedni dla Vercel
    adapter: adapter({
      // Możesz zmienić domyślny folder wyjściowy
      // na przykład na 'build' jeśli to potrzebne
      // fallback: 'index.html', // Jeśli potrzebujesz SPA, dodaj fallback
    }),

    // Dodaj opcjonalnie konfigurację folderu wyjściowego (Vercel)
    target: '#svelte', // Określa, że nasz projekt będzie używać "svelte-target"
  }
};

export default config;
