var express = require('express');
var router = express.Router();
const db = require("../model/helper")


// Get all products + filter
router.get("/", (req, res) => {
  let sql = 'SELECT * FROM products'; 
  // let where = makeWhereFromFilters(req.query); 
  // Send back the full

  db(sql)
    .then(results => {
    //   if (where) {
    //     sql += ` WHERE ${where}`;
    // }
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});

// GET one product
router.get("/:id", async function(req, res) {
  let { id } = req.params;
  try {
    let result = await db(`SELECT * FROM products WHERE prodid = ${id}`);
    let products = result.data;
    if (products.length === 0) {
      res.status(404).send({ error: "item not found" });
    } else {
      res.send(products[0]);
    }
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

// INSERT a new product into the DB
router.post("/", async function(req, res) {
  let { name, type, description, price, status } = req.body;
  let sql = `
  INSERT INTO products (name, type, description, price, status)
  VALUES ('${name}', '${type}', '${description}', '${price}', '${status}')
  `;

  try {
    await db(sql);
    let result = await db("SELECT * FROM products");
    res.send(result.data);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});



module.exports = router;
