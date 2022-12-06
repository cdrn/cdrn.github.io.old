<script>
	import Link from '$components/link.svelte';

	export let projectName = '';
	export let projectDescription = '';
	export let deployedProjectUrl = '';
	export let projectGithubUrl = '';
</script>

<div class="pt-6 pb-6 mt-10 text-monokaiGray">
	////////////////////////////////////////////
	<div class="space-y-4 pt-4 pb-4">
		<h2 class="text-lg text-monokaiTeal"><a href={deployedProjectUrl}>{projectName}</a></h2>
		<p class="text-monokaiYellow">{projectDescription}</p>
		<Link name={projectGithubUrl} url={projectGithubUrl} />
	</div>
	////////////////////////////////////////////
</div>

<style>
</style>
