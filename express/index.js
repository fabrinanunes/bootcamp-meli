const express = require("express");
const productsRoutes = require("./routes/products.routes");

const app = express();

app.use(express.json()); //capturar o body da requisição

app.use("/products", productsRoutes);

app.use((req, res, next) => {
  res.status(404).send({ message: "page not found" });
});

app.listen(3000, () => {
  console.log(`Server is running at PORT 3000`);
});
