import { error } from '@sveltejs/kit';
import { token, KV_REST_API_URL, KV_REST_API_TOKEN } from '$env/static/private';
import { createClient } from '@vercel/kv';

/** @type {import('./$types').RequestHandler} */
export async function GET({ url }) {
  const body = String(url.searchParams.get('msg'));
  if (body === null) {
    throw error(400, "request body empty");
  }
  console.log('body', body);
  const client = createClient({
    url: KV_REST_API_URL,
    token: KV_REST_API_TOKEN
  });
  try {
    const getResponse = await client.get(body);
    console.log('response from cache', getResponse);
    if (getResponse !== null) {
      return new Response(getResponse as string);
    }
  } catch (error) {
    console.error('Error Getting Key from KV:', error);
  }

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: body }]
      })
    });

    const data = await response.json();
    const ANSWER = JSON.stringify(data.choices[0].message.content);
    console.log('answer', ANSWER);
    const outputData = JSON.stringify(data);
    try {
      await client.set(body, ANSWER);
      console.log('set key in cache');
    } catch (error) {
      console.error('Error Setting Key in KV:', error);
    }
    return new Response(ANSWER);
  } catch (error) {
    console.error('Error:', error);
    return new Response('ERROR: ' + error);
  }
}
