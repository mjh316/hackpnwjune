<script lang="ts">
	import { location, inputPage } from '@/stores/home';
	import '@fontsource/rambla';
	let loading = false;
	let results: string[] = [];
	async function fetchResults() {
		console.log('fetching results');
		loading = true;
		// Problem to Tackle: ${problem}
		const startTime = Date.now();
		let prompt = `
    		City: ${$location.city}
    		Budget: ${$inputPage.budget}
    		Time: ${$inputPage.time}
    		Personal Interest: ${$inputPage.personalStatement}
    		This is an entry from a person who would like to do tasks to become involved in saving the environment.
    		Using the budget, time, personal interest and the problem to tackle, Create 5 specific action items that a person can do weekly to tackle the problem, refer to exactly how much money he has to spend and exactly the time he has to spend out of your reccommendations


			Goal 1
			- Goal

			Goal 2
			- Goal

			Goal 3
			- Goal

			Goal 4
			- Goal

			Goal 5
			- Goal

    `;
		const solutionsRes = await fetch(`/api/chat?msg=${prompt}`);
		loading = false;
		console.log('fetched results');
		const elapsedTime = Date.now() - startTime;
		const solution = await solutionsRes.text();
		// const solutionData = await solutionsRes.json();
		// const solution = solutionData.choices[0].message.content;
		results = solution.split('\n\n');
		if (results.length == 1) {
			results = solution.split('\n');
		}
		console.log('elapsedTime', elapsedTime, 'solution', results);
		// console.log(solutionData);
	}
</script>

<div class="grid grid-cols-1 lg:grid-cols-2 flex-1 bg-white mt-10">
	<!-- <div class="form-control gap-y-2 w-full max-w-xs">
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
			bind:value={$inputPage.budget}
			id="budgetInput"
			type="number"
			placeholder="Monthly dollars"
			class="input input-bordered w-full max-w-xs"
		/>
		<label class="label" for="timeInput">
			<span class="label-text">Amount of Time You Will Spend</span>
		</label>
		<input
			bind:value={$inputPage.time}
			id="timeInput"
			type="text"
			placeholder="Weekly minutes"
			class="input input-bordered w-full max-w-xs"
		/>
	</div>
	<div class="mt-4">
		<label class="label" for="problemStatement">
			<span class="label-text lg:text-5xl text-3xl">What do you want to improve?</span>
		</label>
		<input
			bind:value={$inputPage.personalStatement}
			id="problemStatement"
			class="input input-bordered w-full text-white"
		/>
	</div>
	<button disabled={loading} on:click={fetchResults} class="btn btn-neutral my-4">
		Show me!
	</button> -->
	<div class="mt-20 ml-14 mb-20">
		<h1 class="lg:text-6xl text-[#1D4464] pt-10 text-4xl">How Can I Help?</h1>
		<h3 class="text-xl mt-4 lg:text-2xl text-[#1D4464]">Take our short questionnaire!</h3>
		<form on:submit={fetchResults} class="flex flex-col gap-y-6 text-[#1D4464] mt-4">
			<div class="flex flex-col max-w-xs">
				<label for="cityInput" class="pl-2 mb-1 lg:text-xl"> City </label>
				<input
					bind:value={$location.city}
					id="cityInput"
					class="rounded-xl input bg-white border-[#1D4464] border-2"
					placeholder="Your city"
				/>
			</div>
			<div class="flex flex-col max-w-xs">
				<label for="budgetInput" class="pl-2 mb-1 lg:text-xl"> Budget </label>
				<input
					bind:value={$inputPage.budget}
					id="budgetInput"
					class="rounded-xl input bg-white border-[#1D4464] border-2"
					placeholder="Yearly budget ($)"
				/>
			</div>
			<div class="flex flex-col max-w-xs">
				<label for="timeInput" class="pl-2 mb-1 lg:text-xl"> Time Availability </label>
				<input
					bind:value={$inputPage.time}
					id="timeInput"
					class="rounded-xl input bg-white border-[#1D4464] border-2"
					placeholder="Weekly time (min)"
				/>
			</div>
			<div class="flex flex-col max-w-xl">
				<label for="problemStatement" class="pl-2 mb-1 lg:text-xl">
					What do you want to improve?
				</label>
				<textarea
					bind:value={$inputPage.personalStatement}
					id="problemStatement"
					class="rounded-xl textarea resize-none bg-white border-[#1D4464] border-2"
					placeholder="What are you inspired to solve?"
				/>
			</div>
			<button class="btn max-w-xs bg-[#77C6FF] text-white"> Show me! </button>
		</form>
	</div>
	<div class="flex flex-col items-center justify-center bg-[#1D4464]">
		<img class="bg-transparent" src="Group 4.png" alt="Big Logo" />
	</div>
</div>
<div class="p-4 flex flex-col gap-y-4 mb-40">
	{#if loading}
		<span class="loading loading-spinner loading-lg" />
	{/if}
	{#if results.length === 0 && !loading}
		<!-- <span class="text-2xl">No results yet</span> -->
	{:else}
		<ul class="flex flex-col gap-y-2">
			{#each results as result, i}
				{#if result.trim() !== ''}
					<div class="collapse collapse-arrow bg-base-200 max-w-96">
						<input type="radio" name="my-accordion-2" />
						<div class="collapse-title text-xl">Goal {i + 1}</div>
						<div class="collapse-content">
							{#each result.split('-') as res, j}
								{#if res !== `Goal ${i + 1}`}
									<div class={'dark:text-white text-black text-lg ' + (j == 1 ? ' text-2xl' : '')}>
										{res}
									</div>
								{/if}
							{/each}
						</div>
					</div>
				{/if}
			{/each}
		</ul>
	{/if}
</div>

<style>
	.label-text {
		color: black;
	}
	div {
		font-family: 'Rambla', sans-serif;
	}
</style>
