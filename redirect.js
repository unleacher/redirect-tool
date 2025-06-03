const express = require('express');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 3000;

// YouTube-Link aus config.json laden
let youtubeLink = '';
try {
  const config = JSON.parse(fs.readFileSync('config.json', 'utf8'));
  youtubeLink = config.youtubeLink;
} catch (error) {
  console.error('❌ Fehler beim Laden der config.json:', error.message);
  youtubeLink = 'https://www.youtube.com/'; // Fallback
}

app.get('/go', (req, res) => {
  const user = req.query.ref || 'unknown';
  console.log(`🎯 Klick von: ${user} → Weiterleitung zu: ${youtubeLink}`);
  res.redirect(youtubeLink);
});

app.get('/', (req, res) => {
  res.send('✅ Redirect-Tool läuft.');
});

app.listen(PORT, () => {
  console.log(`🚀 Server läuft auf Port ${PORT}`);
});
