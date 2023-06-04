<script>
	import Navbar from '@/components/Navbar.svelte';
	import '../app.css';
	let title = 'ECOLOGME';
	let textColor = 'text-slate-200';
	let bgColor1 = 'bg-slate-500';
</script>

<div class="flex flex-col h-screen bg-gradient-to-b from-[#0094FF] to-[#77C6FF]">
	<Navbar {title} />
	<slot />
</div>
