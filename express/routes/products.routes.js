const express = require('express');

const routes = express.Router();

let products = require('../products')

function validatePrice(req, res, next){
   const { price } = req.body;

   if(price){
      next()
   }

   return res.status(400).send({ 'message': 'Price missing' })
}

routes.get('/', (req, res) => {
   res.json(products)
})

routes.get('/:name', (req, res) => {
   const { name } = req.params;

   const product = products.find((item) => item.name === name);

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

routes.put('/:name/', (req, res) => {
   const { name } = req.params;
   const data = req.body;

   let product = products.find((item) => item.name === name);

   if(!product){
      return res.status(404).json({ 'message': 'This product does not exist' })
   }

   products = products.map((item) => item.name === name ? data : product)

   res.json(products)
})

routes.delete('/:name/', (req, res) => {
   const { name } = req.params;

   const product = products.find((item) => item.name === name);

   if(!product){
      return res.status(404).json({ 'message': 'This product does not exist' })
   }

   products = products.filter((item) => item.name !== name)

   res.json(products)
})

module.exports = routes