import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import sveltePreprocess from 'svelte-preprocess';
import nested from 'postcss-nested'

export default defineConfig({
  plugins: [
    svelte({
      // this works
      // preprocess: sveltePreprocess({ postcss: { plugins: [nested] }})

      // this does not
      //preprocess: sveltePreprocess({ postcss: true })

      // nor this
      preprocess: sveltePreprocess()
    })
  ]
});