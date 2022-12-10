
const express = require("express");
const productRoutes = require('./src/routes/product')
const mongoose = require("mongoose")

const BASE_URI = `mongodb+srv://SAMMAD:sammad320@cluster0.phgwpet.mongodb.net/?retryWrites=true&w=majority/ecommerce`;

mongoose
  .connect(BASE_URI)
  .then((res) => console.log("mongoDb Connect"))
  .catch((err) => console.log(err, "error"));

const app = express();
app.use(express.json());
app.use('/api/v1/product', productRoutes)
const PORT = 5000;

app.listen(PORT, () =>
  console.log(`server  running on http://localhost:${PORT}`)
);