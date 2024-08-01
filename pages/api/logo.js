import axios from 'axios';

export default async function handler(req, res) {
  const { name } = req.query;
  const apiKey = process.env.API_NINJAS_KEY;

  try {
    const response = await axios.get(`https://api.api-ninjas.com/v1/logo?name=${name}`, {
      headers: { 'X-Api-Key': apiKey }
    });
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching logo' });
  }
}