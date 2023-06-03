<script>
	import '../app.css';
	let title = 'ECOLINME';
	let textColor = 'text-slate-200';
	let bgColor1 = 'bg-slate-500';
</script>

<div class="flex flex-col h-screen">
	<div class="navbar fixed text-accent bg-neutral text-center p-4">
		<ul class="[&>*]:px-4 list-none float-left">
			<a href="/" class="text-3xl btn btn-ghost font-bold">{title}</a>
			<li class="text-xl"><a href="/">Go To Suggester Engine</a></li>
		</ul>
	</div>
	<slot />
</div>
