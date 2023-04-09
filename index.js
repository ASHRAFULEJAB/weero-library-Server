const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
const jwt = require("jsonwebtoken");
require("dotenv").config();
const port = process.env.PORT || 5000;

const category = require("./db/category.json");
const books = require("./db/book.json");
app.get("/", (req, res) => {
  res.send("weero library is runnning...");
});
app.listen(port, () => {
  console.log(`weero library is running on ${port}`);
});

app.get('/categories',(req,res)=>{
  res.send(category)
})
app.get("/category/:id", (req, res) => {
  const id = req.params.id;
  const booksAll = books.filter((n) => n.categoryId === id);
  res.send(booksAll);
});

