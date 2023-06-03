<script lang="ts">
	import { city } from '@/stores/home';
	let xml = (zip: number) => `<CityStateLookupRequest USERID="">
    	<ZipCode>
        	<Zip5>${zip}</Zip5>
    	</ZipCode>
	</CityStateLookupRequest>`;
	$: zipCode = $city.match(/\d{5}/g)?.[0];
	async function lookUpZip() {
		console.log('zipcode', zipCode);
		let zip = zipCode ? parseInt(zipCode) : 0;
		let city = '';
		let state = '';
		let url = 'http://production.shippingapis.com/ShippingAPI.dll?API=CityStateLookup&XML=';
		let response = await fetch(url + xml(zip));
		let data = await response.text();
		let parser = new DOMParser();
		let xmlDoc = parser.parseFromString(data, 'text/xml');
		// zip = parseInt(xmlDoc.getElementsByTagName('Zip5')[0].childNodes[0].nodeValue!);
		city = xmlDoc.getElementsByTagName('City')[0].childNodes[0].nodeValue!;
		state = xmlDoc.getElementsByTagName('State')[0].childNodes[0].nodeValue!;
		console.log('zip, city, state', zip, city, state);
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
							bind:value={$city}
							id="city_or_zip_input"
							type="text"
							placeholder="Enter city or zip"
							class="input input-bordered w-full"
						/>
					</div>
					<a
						href="/input"
						class="btn bg-slate-500 text-slate-200 hover:bg-slate-200 hover:text-slate-900 hover:border-slate-900 my-8 btn-link"
						>Get Started</a
					>
					<button on:click={lookUpZip} class="btn btn-neutral">LookUp Zip</button>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
</style>
