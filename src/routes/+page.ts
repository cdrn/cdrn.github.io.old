import { manifest } from './blog/manifest';

// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;

export async function load({ params }: { params: any }) {
	try {
		const postPromises = manifest.map((filename: string) => import(`./blog/${filename}.md`));
		const posts = await Promise.all(postPromises);
		const postMetadata = posts.map((post) => {
			// TODO: find a way to append a string sample of the actual blogpsot
			return { title: post.metadata.title, date: new Date(post.metadata.date) };
		});

		console.log({ postMetadata });
		return postMetadata;

		// return postMetadata.sort((x, y) => Number(x.date) - Number(y.date));
	} catch (e) {
		console.error('WRONG dynamic import - update the manifest', e);
	}
}
