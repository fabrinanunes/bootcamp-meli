const express = require("express");

const routes = express.Router();

let users = []

routes.post('/', (req, res) => {
   const newUser = req.body;

   users = [...users, newUser]

   res.status(201).json({ 'message': 'User created'})
})

routes.put('/:username', (req, res) => {
   const { username } = req.params;
   const content = req.body;
   
   const user = users.find((e) => e.username == username);
   
   if(!user) return res.status(400).json({ message: "User not found" });
   
   users = users.map((e) => e.username == username ? content : user);
   
   res.status(200).json(users);
})

routes.delete('/:username', (req, res) => {
   const { username } = req.params;

   let user = users.find((e) => e.username === username);

   if(!user){
      return res.status(404).json({ 'message': 'User not found'})
   }

   res.status(204).json()
})

routes.get('/', (req, res) => {
   res.status(200).json(users)
})

routes.patch('/:username', (req, res) => {
   const { username } = req.params;
   const password = req.body.password;

   users = users.map((user) => {
      if(user.username == username){
         return {...user, password}
      }

      return user;
   })

   res.status(200).json(users)
})

module.exports = routes