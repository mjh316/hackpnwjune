<script lang="ts">
	let title = "ECOLINME";
    let textColor = "text-slate-200";
    let bgColor1 = "bg-slate-500";
</script>

<div class="navbar {textColor} {bgColor1} text-center p-8">
	<ul class="[&>*]:px-4 list-none float-left">
        <li class="text-3xl font-bold">{title}</li>
        <li class=text-xl><a href="#">Go To Suggester Engine</a></li>
	</ul>
</div>
<div class="bg-base-200">
    <div class="locale w-full max-w-lg m-auto py-16 min-h-screen">
        <div class="text-center">
            <div class="max-w-lg">
                <h1 class="lg:text-6xl text-4xl font-bold">GET ANALYSING</h1>
                <div class="">
                    <p class="py-6 text-md">
                        Enter your approximate location to get started analysing your environmental impact.
                    </p>
                    <div class="form-control w-full py-0">
                        <label class="label">
                        <span class="label-text">What is your city?</span>
                        <span class="label-text-alt">Name or Zip</span>
                        </label>
                        <input type="text" placeholder="Enter city or zip" class="input input-bordered w-full" />
                    </div>
                    <button class="btn bg-slate-500 text-slate-200 hover:bg-slate-200 hover:text-slate-900 hover:border-slate-900 my-8">Get Started</button>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
</style>
