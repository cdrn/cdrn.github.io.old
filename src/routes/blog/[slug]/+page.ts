// src/routes/blog/[slug]/+page.js
export async function load({ params }: { params: any }) {
	// TODO: Wrap this in try, catch with sensible errors
	const post = await import(`../${params?.slug}.md`);
	const { title, date } = post.metadata;
	const content = post.default;

	return {
		content,
		title,
		date
	};
}
