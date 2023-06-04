<script lang="ts">
	let mockData = {
		city: 'Seattle',
		state: 'WA',
		energyData: {
			location: 'Seattle, WA',
			timestamp: '2023-06-01T12:00:00Z',
			electricity_usage_kWh: 2500,
			gas_usage_m3: 150
		},
		airQualityData: {
			location: 'Seattle, WA',
			timestamp: '2023-06-01T12:00:00Z',
			air_quality_index: 68,
			pm2_5: 9.8,
			pm10: 15.2,
			o3: 45.6,
			no2: 18.3,
			so2: 3.2,
			co: 0.5
		},
		invasiveSpeciesData: {
			location: 'Seattle, WA',
			timestamp: '2023-06-01T12:00:00Z',
			invasive_species: [
				{
					species_name: 'Japanese Knotweed',
					infestation_area_sq_m: 1500
				},
				{
					species_name: 'European Green Crab',
					infestation_area_sq_m: 250
				},
				{
					species_name: 'Spotted Lanternfly',
					infestation_area_sq_m: 100
				}
			]
		},
		waterQualityData: {
			location: 'Seattle, WA',
			timestamp: '2023-06-01T12:00:00Z',
			ph_level: 7.2,
			temperature_celsius: 12.5,
			dissolved_oxygen_ppm: 8.3,
			turbidity_ntu: 5.7,
			nitrate_mg_per_l: 1.2,
			phosphate_mg_per_l: 0.5
		}
	};
	let visible = true;
	import Card from '@/components/Card.svelte';
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
			<div class="flex gap-x-4 mt-4 justify-center">
				<Card
					title="Average Energy Usage"
					description={`The average energy usage in ${mockData.city} is ${mockData.energyData.electricity_usage_kWh} kWh.`}
				/>
				<Card
					title="Average Gas Usage"
					description={`The average gas usage in ${mockData.city} is ${mockData.energyData.gas_usage_m3} cubic meters.`}
				/>
				<Card
					title="Total Energy Usage"
					description={`Total energy usage in ${mockData.city} is ${
						mockData.energyData.electricity_usage_kWh + mockData.energyData.gas_usage_m3 * 10.55
					} kWh.`}
				/>
			</div>
		</div>
		<div id="airquality">
			<h1 class="text-accent lg:text-5xl text-3xl">
				Air Quality <img class="inline" src="Air.svg" alt="Air Icon" />
			</h1>
			<div class="flex gap-x-4 mt-4 justify-center">
				<Card
					title={'Average Air Quality Index'}
					description={`The average air quality in ${mockData.city} is ${mockData.airQualityData.air_quality_index} AQI.`}
				/>
				<Card
					title={'Average Carbon Dioxide Level'}
					description={`The average carbon dioxide level in ${mockData.city} is ${mockData.airQualityData.co} ppm.`}
				/>
				<Card
					title={'Average Nitrogen Dioxide Level'}
					description={`The average nitrogen dioxide level in ${mockData.city} is ${mockData.airQualityData.no2} ppm.`}
				/>
			</div>
		</div>
		<div id="invasivespecies">
			<h1 class="text-secondary lg:text-5xl text-3xl">
				Invasive Species <img class="inline" src="Species.svg" alt="Species Icon" />
			</h1>
			<div class="flex gap-x-4 mt-4 justify-center">
				<Card
					title={'Average Invasive Species 1'}
					description={`The average invasive species in ${mockData.city} is ${mockData.invasiveSpeciesData.invasive_species[0].species_name} species.`}
				/>
				<Card
					title={'Average Invasive Species 2'}
					description={`The average invasive species in ${mockData.city} is ${mockData.invasiveSpeciesData.invasive_species[1].species_name} species.`}
				/>
				<Card
					title={'Average Invasive Species 3'}
					description={`The average invasive species in ${mockData.city} is ${mockData.invasiveSpeciesData.invasive_species[2].species_name} species.`}
				/>
			</div>
		</div>
		<div id="waterquality" class="mb-10">
			<h1 class="lg:text-5xl text-3xl text-blue-500">
				Water Quality <img class="inline" src="Water.svg" alt="Water Icon" />
			</h1>
			<div class="flex gap-x-4 mt-4 justify-center">
				<Card
					title={'Average Water Quality PH'}
					description={`The average water quality pH in ${mockData.city} is ${mockData.waterQualityData.ph_level} pH.`}
				/>
				<Card
					title={'Average Water Temperature'}
					description={`The average water temperature in ${mockData.city} is ${mockData.waterQualityData.temperature_celsius}°C.`}
				/>
				<Card
					title={'Average Dissolved Oxygen Level'}
					description={`The average dissolved oxygen level in ${mockData.city} is ${mockData.waterQualityData.dissolved_oxygen_ppm} mg/L.`}
				/>
			</div>
		</div>
	</div>
</div>
