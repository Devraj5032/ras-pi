// index.js
const express = require('express');
const app = express();
const port = 3000;
const host = '0.0.0.0'; // allows access from any IP

// Middleware to parse JSON bodies
app.use(express.json());

// GET route
app.get('/', (req, res) => {
  res.send('Hello from the Node.js API!');
});

// POST route
app.post('/echo', (req, res) => {
  res.json({
    message: 'You sent this data:',
    data: req.body,
  });
});

// Start the server
app.listen(port, host, () => {
  console.log(`🚀 Server is running at http://${host}:${port}`);
});
