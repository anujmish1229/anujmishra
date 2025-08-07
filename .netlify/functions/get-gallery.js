import { Client } from 'pg'

export default async (req, res) => {
  const client = new Client({
    connectionString: process.env.NETLIFY_DATABASE_URL, // Store this in Netlify environment variables
    ssl: {
      rejectUnauthorized: false,
    },
  })

  try {
    await client.connect()
    const result = await client.query('SELECT path FROM gallery ORDER BY id')
    await client.end()

    return res.status(200).json(result.rows)
  } catch (err) {
    return res.status(500).json({ error: err.message })
  }
}
