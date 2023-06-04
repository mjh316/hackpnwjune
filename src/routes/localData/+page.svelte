<script lang="ts">
	let mockData = {
		city: 'Seattle',
		state: 'WA',
		energyData: {
			energyUsage: 0.5,
			energyCost: 0.5,
			energySource: 'solar',
			energySourcePercentage: 0.5,
			energySourceCost: 0.5,
			energySourceEmissions: 0.5,
			energySourceEmissionsPercentage: 0.5,
			energySourceEmissionsCost: 0.5
		},
		airQualityData: {
			airQuality: 0.5,
			airQualityCost: 0.5,
			airQualityEmissions: 0.5,
			airQualityEmissionsCost: 0.5
		},
		invasiveSpeciesData: {
			invasiveSpecies: 0.5,
			invasiveSpeciesCost: 0.5,
			invasiveSpeciesEmissions: 0.5,
			invasiveSpeciesEmissionsCost: 0.5
		},
		waterQualityData: {
			waterQuality: 0.5,
			waterQualityCost: 0.5,
			waterQualityEmissions: 0.5,
			waterQualityEmissionsCost: 0.5
		}
	};
	let visible = true;
	import CircleLink from '@/components/CircleLink.svelte';
	import { fade } from 'svelte/transition';
</script>

<main class="bg-white min-h-screen flex-1 flex flex-col items-center justify-center">
	{#if visible}
		<CircleLink
			href="#energy"
			text="Energy Usage"
			bgColor="bg-[#EF874C]"
			offset="ml-48 mb-96"
			size="w-48 h-48"
			textSize="text-3xl"
		/>
		<CircleLink
			x={200}
			href="#airquality"
			delay={200}
			text="Air Quality"
			bgColor="bg-[#55D962]"
			offset="mr-[300px] lg:mr-[600px] mb-44"
			size="w-48 h-48 lg:w-64 lg:h-64 text-4xl"
		/>
		<CircleLink
			y={-100}
			x={200}
			href="#invasivespecies"
			delay={400}
			text="Invasive Species"
			bgColor="bg-[#EF4CCB]"
			offset="mr-[200px] lg:mr-[400px] mt-96"
			size="w-48 h-48 lg:w-48 lg:h-48 text-xl"
		/>
		<CircleLink
			y={-100}
			x={-200}
			href="#waterquality"
			delay={600}
			text="Water Quality"
			bgColor="bg-[#5562D9]"
			offset="ml-[300px] lg:ml-[400px] mt-96"
			size="w-52 h-52 lg:w-52 lg:h-52 text-3xl"
		/>
	{/if}
	<div class="flex flex-col items-center text-black">
		{#if visible}
			<div in:fade class="text-black text-center">
				<h1 class="lg:text-6xl text-5xl">
					{mockData.city}
				</h1>
				<h3 class="lg:text-2xl text-xl">
					{mockData.state}
				</h3>
			</div>
		{/if}
	</div>
</main>
<div class="flex-none bg-white text-black -mt-20 pt-20 min-h-screen">
	<div class="ml-10 mt-10 flex flex-col gap-y-6">
		<div id="energy">
			<h1 class="text-amber-500 lg:text-5xl text-3xl">
				Energy Usage <img class="inline" src="Energy.svg" alt="Energy Icon" />
			</h1>
			<div>
				<p class="text-xl">
					The average energy usage in {mockData.city} is {mockData.energyData.energyUsage} kWh.
				</p>
			</div>
		</div>
		<div id="airquality">
			<h1 class="text-accent lg:text-5xl text-3xl">
				Air Quality <img class="inline" src="Air.svg" alt="Air Icon" />
			</h1>
			<div>
				<p class="text-xl">
					The average air quality in {mockData.city} is {mockData.airQualityData.airQuality} AQI.
				</p>
			</div>
		</div>
		<div id="invasivespecies">
			<h1 class="text-secondary lg:text-5xl text-3xl">
				Invasive Species <img class="inline" src="Species.svg" alt="Species Icon" />
			</h1>
			<div>
				<p class="text-xl">
					The average invasive species in {mockData.city} is {mockData.invasiveSpeciesData
						.invasiveSpecies} species.
				</p>
			</div>
		</div>
		<div id="waterquality">
			<h1 class="lg:text-5xl text-3xl text-blue-500">
				Water Quality <img class="inline" src="Water.svg" alt="Water Icon" />
			</h1>
			<div>
				<p class="text-xl">
					The average water quality in {mockData.city} is {mockData.waterQualityData.waterQuality} WQI.
				</p>
			</div>
		</div>
	</div>
</div>
