// index.js
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json()); // for parsing JSON bodies

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

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
