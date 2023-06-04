import type {PageLoad} from './$types';

export const load = (async ({ fetch }) => {
    const solutionsRes = await fetch("/api/chat?msg=cook")
    const solutionData = await solutionsRes.json();
    const solution = solutionData.choices[0].message.content;
    console.log(solution)
    console.log(solutionData)
    return {
        messages: solution
    }
}) satisfies PageLoad;
