const express = require("express");

const routes = express.Router();

function createUser(req, res, next){
   res.locals.user = {
      name: 'Fabrina',
      admin: true
   }
}

routes.post('/', (req, res) => {
   const { name } = req.body;

   res.status(201).json(name)
})

module.exports = routes