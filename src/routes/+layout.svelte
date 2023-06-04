<script>
	import Navbar from '@/components/Navbar.svelte';
	import '../app.css';
	let title = 'ECOLOGME';
	let textColor = 'text-slate-200';
	let bgColor1 = 'bg-slate-500';
	import { scrollY } from '@/stores/scroll';
</script>

<div class="flex flex-col h-screen bg-gradient-to-b from-[#0094FF] to-[#77C6FF]">
	<Navbar {title} />
	<slot />
	{#if $scrollY > 350}
		<button
			on:click={() => window.scrollTo(0, 0)}
			class="rounded-full text-5xl fixed bottom-10 right-10 bg-blue-300 py-2 px-4 text-black aspect-square"
			>^</button
		>
	{/if}
</div>

<style>
	:global(html) {
		scroll-behavior: smooth;
		height: 100%;
		overflow: hidden;
	}
</style>
