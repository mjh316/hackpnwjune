<script lang="ts">
	import Navbar from '@/components/Navbar.svelte';

    import { onMount } from "svelte";


	let title = 'ECOLINME';
	let textColor = 'text-slate-200';
	let bgColor1 = 'bg-slate-500';

	let city;
	let budget;
	let problem;
	let time;
	let personalStatement;

	let prompt = `
    City: ${city}
    Budget: ${budget}
    Problem to Tackle: ${problem}
    Time: ${time}
    Personal Interest: ${personalStatement}
    This is an entry from a person who would like to do tasks to become involved in saving the environment.
    Using the budget, time, personal interest and the problem to tackle, Create 5 specific goals/tasks that a person can do daily to tackle the problem
    `;

    export let data;
    const { messages } = data;
    console.log('data', data);
</script>

<div class="h-20 w-screen">
	<Navbar {title} />
</div>
<div class="">
	<p class="lg:text-6xl text-4xl p-12 text-slate-800 font-bold">Solutions For You</p>
    <div class="container">
        <div class="grid text-black">
            {messages}
        </div>
    </div>
</div>

<style>
</style>
