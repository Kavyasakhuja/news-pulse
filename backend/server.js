const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 5000;
const cors = require("cors");
app.use(cors());

// API endpoint to serve clusters.json
app.get('/api/news', (req, res) => {
  const filePath = path.join(__dirname, '../scraper/clusters.json');
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {                            //if file doesn't exit
      console.error("Error reading clusters.json:", err);
      return res.status(500).json({ error: 'Failed to read clusters file' });
    }
    try {
      const clusters = JSON.parse(data);     // convert in json and send data
      res.json(clusters);
    } catch (parseErr) {            // invalid json
      console.error("Error parsing clusters.json:", parseErr);
      res.status(500).json({ error: 'Invalid JSON format in clusters file' });
    }
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
