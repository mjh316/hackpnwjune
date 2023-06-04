<script lang="ts">
	import { location } from '@/stores/home';
	import { scrollY } from '@/stores/scroll';

	$: zipCode = $location.zip.match(/\d{5}/g)?.[0];
	$: cityName = $location.zip;

	async function lookUpZip() {
		if (!zipCode) {
			$location.city = cityName;
			$location.state = '';
			return;
		}
		const req = await fetch(`/api/lookupZipcode?zip=${zipCode}`);
		const res = (await req.json()) as unknown as {
			city: string;
			state: string;
		};
		$location.city = res.city;
		$location.state = res.state;
		return res;
	}
	$: console.log($scrollY);
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link href="https://fonts.googleapis.com/css2?family=Rambla&display=swap" rel="stylesheet" />
</svelte:head>
<div class="container">
	<div class="bg-inherit flex-1 min-h-screen text-neutral mt-20 pt-20">
		<div class="locale w-full max-w-lg m-auto py-16">
			<div class="text-center">
				<div class="">
					<h1 class="lg:text-4xl text-3xl tracking-wider font-bold">
						Transforming Actions into Sustainable Impact
					</h1>
					<h2 class="lg:text-2xl mt-4 text-xl font-bold">
						Empowering Individuals to Lead the Green Revolution.
					</h2>
					<div class=" text-center flex flex-col items-center">
						<div class="form-control mx-auto justify-center w-full py-0 max-w-sm">
							<label class="label gap-x-10" for="city_or_zip_input">
								<span class="label-text text-neutral">What is your city?</span>
								<span class="label-text-alt text-neutral">Name or Zip</span>
							</label>
							<input
								bind:value={$location.zip}
								id="city_or_zip_input"
								type="text"
								placeholder="Enter city or zip"
								class="input input-bordered w-full"
							/>
						</div>
						<a on:click={lookUpZip} href="/input" class="btn my-8">Get Started</a>
					</div>
				</div>
			</div>
		</div>
	</div>
	<section
		class="parallax mb-40 pr-10 rounded-3xl bg-sky-600 text-white flex-none text-neutral min-h-fit overflow-clip"
	>
		<h1 class="pl-10 pt-10 text-neutral text-white lg:text-5xl md:text-4xl text-3xl">
			Our Mission
		</h1>
		<p class="pl-10 pt-10 leading-loose text-lg lg:text-xl">
			At Ecologme, our mission is to empower individuals and communities to make a positive impact
			on the environment. Through user- and locale-based input, we provide actionable and motivating
			ways for people to improve their environmental footprint. By leveraging user input, including
			location, budget, and free time, we personalize our recommendations to address specific needs
			and preferences.
			<br /><br />
			We believe that everyone has the power to contribute to a sustainable future, and that begins with
			understanding and addressing local environmental challenges. Our platform collects localization
			input on crucial factors such as air quality, water quality, littering, and biodiversity. By integrating
			data from trusted sources like OpenAQ for air quality, we ensure that users have access to accurate
			and up-to-date information.
			<br /><br />
			Whether it's reducing air pollution, conserving water resources, tackling littering issues, or
			promoting biodiversity, Ecologme is dedicated to providing tailored solutions that are relevant
			to each individual's local community. By offering personalized recommendations that address personal
			concerns and motivations, we aim to inspire and empower individuals to take meaningful action towards
			a greener and more sustainable future.
		</p>
	</section>
	<section
		class="parallax mb-40 pr-10 rounded-3xl bg-sky-600 text-white flex-none text-neutral min-h-fit -mt-20 overflow-clip"
	>
		<h1 class="pl-10 pt-10 text-neutral text-white lg:text-5xl md:text-4xl text-3xl">
			What is Ecologme?
		</h1>
		<p class="pl-10 pt-10 leading-loose text-lg lg:text-xl">
			Ecologme is a user-centric platform that leverages location-based input to generate
			personalized and actionable ways for individuals to improve their environmental footprint. Our
			goal is to empower users by providing localized recommendations and motivation to make a
			positive impact on their communities and the planet.
		</p>
	</section>
	<section
		class="parallax mb-40 rounded-3xl pr-10 bg-sky-600 text-white flex-none text-neutral min-h-fit -mt-20 overflow-clip"
	>
		<h1 class="pl-10 pt-10 text-neutral text-white lg:text-5xl md:text-4xl text-3xl">
			How does it work?
		</h1>
		<p class="pl-10 pt-10 leading-loose text-lg lg:text-xl">
			Ecologme operates through a simple yet effective process. It begins by gathering user input,
			where individuals provide information about their location, budget, free time, and specific
			environmental goals. This input helps Ecologme understand the unique context and priorities of
			each user. Utilizing trusted sources like OpenAQ, Ecologme then collects crucial localization
			data on air quality, water quality, littering, and biodiversity. This data forms the
			foundation for personalized recommendations tailored to each user's needs and their local
			community. By offering practical steps to improve their environmental footprint, Ecologme
			empowers users to make a tangible difference in their surroundings.
			<br /><br />
			But Ecologme doesn't stop at recommendations. The platform goes a step further by encouraging users
			to take action and track their progress. By fostering continuous engagement and providing a supportive
			community, Ecologme helps individuals celebrate their achievements and stay motivated on their
			environmental journey. Additionally, Ecologme is committed to constant improvement. The platform
			actively listens to user feedback, incorporates new data insights, and stays up-to-date with emerging
			environmental practices. This ensures that Ecologme's recommendations and features remain effective,
			relevant, and impactful over time.
		</p>
	</section>
</div>
<svelte:window bind:scrollY={$scrollY} />

<style>
	.container {
		height: 100%;
		-webkit-perspective: 100px;
		perspective: 100px;
		-webkit-perspective-origin: 0 0;
		perspective-origin: 0 0;
		overflow-x: hidden;
		overflow-y: auto;
		margin-left: auto;
		margin-right: auto;
		scrollbar-width: none;
		-ms-overflow-style: none;
	}
	.container::-webkit-scrollbar {
		width: 0px;
		background: transparent;
	}
	section {
		transform-style: preserve-3d;
		position: relative;
		height: 60vh;
		display: flex;
		flex-direction: column;
	}
	.parallax h1 {
		width: 60%;
		font-size: 2rem;
	}

	.parallax::after {
		content: ' ';
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		transform: translateZ(-1px) scale(1.5);
		background-size: 100%;
		z-index: -1;
	}
	div {
		font-family: 'Rambla', sans-serif;
	}
</style>
