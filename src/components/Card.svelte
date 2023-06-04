<script lang="ts">
	export let title: string;
	export let description: string;
</script>

<div class="card w-96 bg-base-100 shadow-2xl drop-shadow-2xl text-neutral-content">
	<div class="card-body">
		<h2 class="card-title">{title}</h2>
		<p class="text-xl">
			{description}
		</p>
	</div>
</div>
