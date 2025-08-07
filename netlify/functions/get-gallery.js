import pkg from 'pg';
const { Client } = pkg;

export async function handler(event, context) {
  const client = new Client({
    connectionString: process.env.NETLIFY_DATABASE_URL,
    ssl: { rejectUnauthorized: false }
  });

  try {
    await client.connect();
    const result = await client.query('SELECT path FROM images ORDER BY id');
    await client.end();

    return {
      statusCode: 200,
      body: JSON.stringify(result.rows),
      headers: { "Content-Type": "application/json" }
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
}
