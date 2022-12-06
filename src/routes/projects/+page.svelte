<script>
	import ProjectCard from '$components/ProjectCard.svelte';
</script>

<svelte:head>
	<title>Projects</title>
	<meta name="description" content="A list of the projects i've worked on" />
</svelte:head>
<div class="flex flex-col max-w-[1000px] mt-10 items-start">
	<h1 class="mb-6 text-3xl text-monokaiTeal">Projects</h1>

	<p>Here's a list of personal projects i've worked on</p>

	<div>
		<ProjectCard
			projectName="An example project"
			projectDescription="This is an example project description"
			projectDeployedUrl="https://github.com"
			projectGithubUrl="https://github.com"
		/>
	</div>
</div>
