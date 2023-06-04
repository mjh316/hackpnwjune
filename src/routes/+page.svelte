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
	// $: console.log($scrollY);
</script>

<div class="bg-inherit flex-1 min-h-screen text-neutral pt-20">
	<div class="locale w-full max-w-lg m-auto py-16">
		<div class="text-center">
			<div class="max-w-lg">
				<h1 class="lg:text-6xl text-4xl font-bold">GET ANALYSING</h1>
				<div class="">
					<p class="py-6 text-md">
						Enter your approximate location to get started analysing your environmental impact.
					</p>
					<div class="form-control w-full py-0">
						<label class="label" for="city_or_zip_input">
							<span class="label-text text-neutral">What is your city?</span>
							<span class="label-text-alt text-neutral">Name or Zip</span>
						</label>
						<input
							bind:value={$location.zip}
							id="city_or_zip_input"
							type="text"
							placeholder="Enter city or zip"
							class="input input-bordered w-full text-primary-content"
						/>
					</div>
					<a on:click={lookUpZip} href="/input" class="btn my-8">Get Started</a>
				</div>
			</div>
		</div>
	</div>
</div>
<div class="flex-none text-neutral h-screen -mt-20 pt-20">
	<h1 class="text-neutral lg:text-4xl md:text-3xl text-2xl">Our Mission</h1>
</div>
<svelte:window bind:scrollY={$scrollY} />

<style>
</style>
