<script lang="ts">
	import { location } from '@/stores/home';
	$: zipCode = $location.zip.match(/\d{5}/g)?.[0];
	async function lookUpZip() {
		if (!zipCode) {
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
</script>

<div class="bg-base-200 flex-1 mt-20">
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
							<span class="label-text">What is your city?</span>
							<span class="label-text-alt">Name or Zip</span>
						</label>
						<input
							bind:value={$location.zip}
							id="city_or_zip_input"
							type="text"
							placeholder="Enter city or zip"
							class="input input-bordered w-full"
						/>
					</div>
					<a
						on:click={lookUpZip}
						href="/input"
						class="btn bg-slate-500 text-slate-200 hover:bg-slate-200 hover:text-slate-900 hover:border-slate-900 my-8 btn-link"
						>Get Started</a
					>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
</style>
