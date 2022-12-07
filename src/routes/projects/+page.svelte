<script>
	import ProjectCard from '$components/ProjectCard.svelte';
</script>

<svelte:head>
	<title>cdrn - Projects</title>
	<meta name="description" content="A list of the projects i've worked on" />
</svelte:head>
<div class="flex flex-col mt-10 items-start">
	<ProjectCard
		projectName="This website"
		deployedProjectUrl="https://cdrn.xyz"
		projectGithubUrl="https://github.com/cdrn/cdrn.github.io"
	>
		This website is an experiment built in Svelte with Sveltekit. Credit to <a
			class="hover:underline"
			target="_blank"
			href="https://caitlinmacrae.me">Caitlin Macrae</a
		> for the designs!
	</ProjectCard>
	<div />
</div>
