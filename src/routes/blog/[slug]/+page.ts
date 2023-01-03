// src/routes/blog/[slug]/+page.js
export async function load({ params }: { params: any }) {
	// TODO: Wrap this in try, catch with sensible errors
	const post = await import(`../posts/${params?.slug}.md`);
	const { title, date } = post.metadata;
	const content = post.default;

	return {
		content,
		title,
		date
	};
}
// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;
