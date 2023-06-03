<script>
	import Navbar from '@/components/Navbar.svelte';
	import '../app.css';
	let title = 'ECOLINME';
	let textColor = 'text-slate-200';
	let bgColor1 = 'bg-slate-500';
</script>

<div class="flex flex-col h-screen">
	<Navbar {title} />
	<slot />
</div>
