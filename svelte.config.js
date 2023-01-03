import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex'
import { manifest } from './src/routes/blog/posts/manifest.js'


const mappedManifest = manifest.map(entry => `/blog/${entry}`)

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess({
		postcss: true
	}),
    mdsvex({
      extensions: ['.md'],
    })
	],
	extensions: ['.svelte', '.md'],
	kit: {
		adapter: adapter({
			// default options are shown. On some platforms
			// these options are set automatically — see below
			pages: 'docs',
			assets: 'docs',
			fallback: null,
			precompress: false,
			strict: true
		  }),
		  prerender: {
			// Svelte doesn't understand how to prerender dynamic routes unless there's some 
			// explicit pointer to them
			entries: mappedManifest
		  }

	}


};

export default config;
