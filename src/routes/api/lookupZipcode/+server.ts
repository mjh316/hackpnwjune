import type { RequestHandler } from "./$types";
import { USPS_USER_ID } from "$env/static/private";

export const GET = (async ({ url }) => {
    const xml = `
        <CityStateLookupRequest USERID="${USPS_USER_ID}">
            <ZipCode>
                <Zip5>${url.searchParams.get('zip')}</Zip5>
            </ZipCode>
        </CityStateLookupRequest>
    `;
    const req = await fetch('https://secure.shippingapis.com/ShippingAPI.dll?API=CityStateLookup&XML=' + encodeURIComponent(xml));
    const res = await req.text();
    const city = res.match(/<City>(.+)<\/City>/)?.[1];
    const state = res.match(/<State>(.+)<\/State>/)?.[1];
    return new Response(JSON.stringify({
        city: city,
        state: state
    }), {
        headers: {
            'content-type': 'application/json'
        }
    });
}) satisfies RequestHandler;