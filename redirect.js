const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const YOUTUBE_VIDEO = 'https://www.youtube.com/watch?v=6eZP8X4VtJc';

app.get('/go', (req, res) => {
  const user = req.query.ref || 'unknown';
  console.log(`🎯 Klick von: ${user} → Weiterleitung zum YouTube-Video`);
  res.redirect(YOUTUBE_VIDEO);
});

app.get('/', (req, res) => {
  res.send('✅ Redirect-Tool läuft.');
});

app.listen(PORT, () => {
  console.log(`🚀 Server läuft auf Port ${PORT}`);
});
