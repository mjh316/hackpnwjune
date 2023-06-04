<script lang="ts">
	import { scrollY } from '@/stores/scroll';
	import { page } from '$app/stores';
	export let title: string;
	$: pathName = $page.url.pathname;
</script>

<div
	class={'navbar fixed text-neutral text-center py-4 px-2' +
		' ' +
		($scrollY > 650 ? 'bg-[#77C6FF] bg-opacity-100' : '') +
		' ' +
		($scrollY > 10 ? 'backdrop-filter bg-opacity-30 backdrop-blur-sm' : '') +
		' ' +
		(pathName === '/' ? '' : 'bg-[#77C6FF]')}
>
	<ul class="[&>*]:px-4 list-none float-left">
		<a href="/" class="text-3xl btn btn-ghost font-bold">{title}</a>
		<li class="text-xl"><a href="/">Go To Suggester Engine</a></li>
	</ul>
</div>

<style>
</style>
