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

app.get('/products/:id/', (req, res) => {
   const { id } = req.params;
   products = products.find((item) => item.id === +id);

   res.json(products);
})

app.put('/products/:id/', (req, res) => {
   const { id } = req.params;
   const data = req.body;

   const product = products.find((item) => item.id === +id);

   if(!product){
      return res.status(404).json({ 'message': 'This product does not exist' })
   }

   products = products.map(item => item.id === +id ? data : item)

   res.json(products)
})

app.delete('/products/:id/', (req, res) => {
   const { id } = req.params;

   const product = products.find((item) => item.id === +id);

   if(!product){
      return res.status(404).json({ 'message': 'This product does not exist' })
   }

   products = products.filter((item) => item.id !== +id)

   res.json(products)
})

app.listen(3000, () => {
   console.log(`Server is running at PORT 3000`)
})