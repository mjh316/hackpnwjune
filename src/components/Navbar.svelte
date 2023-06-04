<script lang="ts">
	import { scrollY } from '@/stores/scroll';
	import { page } from '$app/stores';
	export let title: string;
	$: pathName = $page.url.pathname;
</script>

<div
	class={'navbar will-change-transform fixed text-neutral z-10 text-center py-4 px-2' +
		' ' +
		($scrollY > 650 ? 'bg-[#77C6FF] bg-opacity-100' : '') +
		' ' +
		(pathName !== '/' ? 'bg-[#77C6FF]' : 'backdrop-filter bg-opacity-30 backdrop-blur-sm') +
		' ' +
		(pathName === '/' ? '' : 'bg-[#77C6FF]')}
>
	<img width="64" height="64" src="logo.png" alt="Logo" />
	<ul class="[&>*]:px-4 list-none float-left">
		<a href="/" class="text-3xl btn btn-ghost font-bold">{title}</a>
		<li class="text-xl"><a href="/localData">Location Data</a></li>
		<li class="text-xl"><a href="/input">Solutions</a></li>
	</ul>
</div>

<style>
</style>
