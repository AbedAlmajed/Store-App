
// const express = require('express');
// const axios = require('axios');
// const cors = require('cors'); //Cross-Origin Resource Sharing (CORS)

// const app = express();
// const port = 5000;

// app.use(cors());

// app.get('/api/products', async (req, res) => {
//   try {
//     const response = await axios.get('https://fakestoreapi.com/products');
//     res.json(response.data);
//   } catch (error) {
//     res.status(500).json({ message: 'Error fetching data' });
//   }
// });

// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);
// });
////////////////////
// src/server.js
// server.js or app.js
// server.js or app.js
const express = require('express');
const axios = require('axios');
const cors = require('cors'); // Cross-Origin Resource Sharing (CORS)

const app = express();
const port = 5000;

app.use(cors()); // Enable CORS for all routes

// Endpoint to fetch all products
app.get('/api/products', async (req, res) => {
  try {
    const response = await axios.get('https://fakestoreapi.com/products');
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ message: 'Error fetching products' });
  }
});

// Endpoint to fetch a single product by ID
app.get('/api/products/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching product data:', error);
    res.status(500).json({ message: 'Error fetching product data' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
