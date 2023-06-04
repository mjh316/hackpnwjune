<script lang="ts">
	import { fly, fade, scale, slide } from 'svelte/transition';
	import { cubicOut, quintInOut } from 'svelte/easing';
	let visible = true;
	export let size = ' w-48 h-48 ';
	export let offset = ' ml-48 mb-96 ';
	export let text: string;
	export let textSize = 'text-3xl';
	export let bgColor = 'bg-[#EF874C]';
	export let delay = 0;
	export let href: string;
	export let y = 200;
	export let x = 0;
</script>

{#if visible}
	<!-- <div in:scale={{ duration: 400, delay }} class="border-2 border-red-400"> -->
	<a
		{href}
		in:fly={{ easing: cubicOut, x, y, duration: 400, delay }}
		id="energy-button"
		class="rounded-full hover:scale-125 duration-300 transition-transform {bgColor} {offset} flex items-center absolute justify-center {size} {textSize} text-white"
	>
		{text}
	</a>
	<!-- </div> -->
{/if}
