const express = require('express');
const path = require('path');

const app = express();
const buildPath = path.join(__dirname, 'client/testproject/dist');

// Serve static files
app.use(express.static(buildPath));

// SPA fallback (works in all Express versions)
app.use((req, res) => {
  res.sendFile(path.join(buildPath, 'index.html'));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});