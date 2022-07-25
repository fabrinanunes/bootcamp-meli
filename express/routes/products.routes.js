const express = require('express');

const routes = express.Router();

let products = require('../products')

routes.get('/', (req, res) => {
   res.json(products)
})

routes.get('/:id', (req, res) => {
   const { id } = req.params;

   const product = products.find((item) => item.id === +id);

   if(!product){
      return res.status(404).json({ 'message': 'This product does not exist' })
   }

   res.json(product)
})

routes.post('/', (req, res) => {
   const product = req.body;
   products = [...products, product];

   res.status(201).json(product);
})

routes.put('/:id', (req, res) => {
   const { id } = req.params;
   const data = req.body;

   let product = products.find((item) => item.id === +id);

   if(!product){
      return res.status(404).json({ 'message': 'This product does not exist' })
   }
   
   products = products.map((item) => item.id === +id ? data : product)

   res.json(product)
})

routes.delete('/:id', (req, res) => {
   const { id } = req.params;

   const product = products.find((item) => item.id === +id);

   if(!product){
      return res.status(404).json({ 'message': 'This product does not exist' })
   }

   products = products.filter((item) => item.id !== +id)

   res.json(products)
})

module.exports = routes