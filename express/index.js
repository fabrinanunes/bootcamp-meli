const express = require("express");

let products = require('./products')

const app = express();

app.use(express.json()); //capturar o body da requisição

app.get('/products', (req, res) => {
   res.json(products)
})

app.post('/products', (req, res) => {
   const product = req.body;
   products = [...products, product];

   res.status(201).json(products);
})

app.put('/products/:name/', (req, res) => {
   const { name } = req.params;
   const data = req.body;

   let product = products.find((item) => item.name === name);

   if(!product){
      return res.status(404).json({ 'message': 'This product does not exist' })
   }

   products = products.map((item) => item.name === name ? data : product)

   res.json(products)
})

app.delete('/products/:name/', (req, res) => {
   const { name } = req.params;

   const product = products.find((item) => item.name === name);

   if(!product){
      return res.status(404).json({ 'message': 'This product does not exist' })
   }

   products = products.filter((item) => item.name !== name)

   res.json(products)
})

app.listen(3000, () => {
   console.log(`Server is running at PORT 3000`)
})