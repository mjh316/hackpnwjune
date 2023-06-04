<script lang="ts">
	export let title: string;
	export let description: string;
</script>

<div class="card w-96 bg-slate-100 shadow-sm drop-shadow-lg text-slate-800">
	<div class="card-body">
		<h2 class="card-title">{title}</h2>
		<p class="text-xl">
			{description}
		</p>
	</div>
</div>
