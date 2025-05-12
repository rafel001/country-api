const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

app.get('/api/country', async (req, res) => {
  try {
    // Use ipapi to detect external IP and country
    const response = await axios.get('https://ipapi.co/json/');
    const ip = response.data.ip;
    const country = response.data.country_name;

    res.json({
      country: country,
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Could not fetch country information.' });
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
