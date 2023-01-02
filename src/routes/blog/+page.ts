import { validateLocaleAndSetLanguage } from 'typescript';
import { manifest } from './manifest';
/**
 * Load in all the blog posts we have (using the client), grab the important
 * parts (date, title, body) and pass it to the index page so we an render
 * all of the posts in date order
 */
export async function load({ params }: { params: any }) {
	try {
		const postPromises = manifest.map((filename: string) =>
			// Add the filename to the returned promise to construct link
			import(`./${filename}.md`).then((val) => {
				return { ...val, filename };
			})
		);
		const posts = await Promise.all(postPromises);
		const postMetadata = posts.map((post) => post.metadata);
		console.log({ postMetadata });
	} catch (e) {
		console.error('WRONG dynamic import - update the manifest', e);
	}
}

// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;
