<script>
	import InfoForm from './infoform.svelte';
</script>
<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link href="https://fonts.googleapis.com/css2?family=Rambla&display=swap" rel="stylesheet" />
</svelte:head>
<div class="infocontainer flex h-full w-screen overflow-hidden">
	<InfoForm />
</div>

<style>
	.infocontainer {
		background-color: #ffe5b7;
	}
	div {
		font-family: 'Rambla', sans-serif;
	}
</style>
