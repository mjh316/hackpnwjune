<script lang="ts">
	import { location } from '@/stores/home';
</script>

<div class="flex flex-col items-center justify-center flex-1 bg-white">
	<div class="form-control gap-y-2 w-full max-w-xs">
		<label class="label" for="cityInput">
			<span class="label-text">City Name</span>
		</label>
		<input
			value={$location.city ? $location.city + ' ' + $location.state : ''}
			id="cityInput"
			disabled={$location.city ? true : false}
			class={'input flex flex-col justify-center input-bordered disabled:input-bordered disabled:input w-full max-w-xs ' +
				($location.city ? 'bg-neutral text-base' : '')}
		/>
		<label class="label" for="budgetInput">
			<span class="label-text">Budget (in USD)</span>
		</label>
		<input
			id="budgetInput"
			type="number"
			placeholder="Type here..."
			class="input input-bordered w-full max-w-xs"
		/>
		<label class="label" for="timeInput">
			<span class="label-text">Amount of Time You Will Spend</span>
		</label>
		<input
			id="timeInput"
			type="text"
			placeholder="Type here..."
			class="input input-bordered w-full max-w-xs"
		/>
	</div>
</div>

<style>
	.label-text {
		color: black;
	}
</style>
