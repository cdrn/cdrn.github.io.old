// src/routes/blog/[slug]/+page.js
export async function load({ params }: { params: any }) {
	console.log('loading...');
	const post = await import(`../${params?.slug}.md`);
	const { title, date } = post.metadata;
	const content = post.default;
	console.log('Loading file at slug...', params?.slug);

	return {
		content,
		title,
		date
	};
}
