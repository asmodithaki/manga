export default async function handler(req, res) {
    if (req.method === 'POST') {
      // Do task automation here.
      res.status(200).json({ status: 'Task Automated' });
    } else {
      res.status(405).end(); //Method Not Allowed
    }
  }