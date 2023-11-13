// pages/api/chatBot.js

export default async function handler(req, res) {
    if (req.method === 'POST') {
      // Integrate GPT-4 logic here
      res.status(200).json({ reply: 'GPT-4 Response' });
    } else {
      res.status(405).end(); //Method Not Allowed
    }
  }
  