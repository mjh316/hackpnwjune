import { error } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export function GET({ url }) {
    const body = String(url.searchParams.get('msg'));

    if (body === null) {
        throw error(400, "request body empty");
    }

    return new Response(":, " + String(body));
}
