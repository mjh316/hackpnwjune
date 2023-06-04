import { error } from '@sveltejs/kit';
import { token } from '$env/static/private';

/** @type {import('./$types').RequestHandler} */
export async function GET({ url }) {
  const body = String(url.searchParams.get('msg'));

  if (body === null) {
    throw error(400, "request body empty");
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
    console.log(data);

    const outputData = JSON.stringify(data);
    return new Response(String(body) + outputData);
  } catch (error) {
    console.error('Error:', error);
    return new Response('ERROR: ' + error);
  }
}
