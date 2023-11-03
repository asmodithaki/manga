import { Pool } from 'pg';

const pool = new Pool({
  user: 'mortimer',
  host: 'localhost',
  database: 'thurisalabs',
  password: 'satanika112205',
  port: 5432,
  ssl: true,
});

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { firstName, lastName, phone, email, yourMessage } = req.body;

    try {
      const result = await pool.query(
        `INSERT INTO form_submissions (first_name, last_name, phone, email, your_message)
        VALUES ($1, $2, $3, $4, $5) RETURNING *`,
        [firstName, lastName, phone, email, yourMessage]
      );

      return res.status(200).json(result.rows[0]);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  }
}



