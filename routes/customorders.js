var express = require('express');
var router = express.Router();
const db = require("../model/helper")

router.get('/', function(req, res, next) {
    db("SELECT * FROM customorders;")
      .then(results => {
        res.send(results.data);
      })
      .catch(err => res.status(500).send(err));
});
  
// GET one order
router.get("/:id", async function(req, res) {
    let { id } = req.params;
    try {
      let result = await db(`SELECT * FROM customorders WHERE formid = ${id}`);
      let order = result.data;
      if (order.length === 0) {
        res.status(404).send({ error: "order not found" });
      } else {
        res.send(order[0]);
      }
    } catch (err) {
      res.status(500).send({ error: err.message });
    }
});
  
  // INSERT a new order into the DB
router.post("/", async function(req, res) {
    let { client_name, client_email, type, description } = req.body;
    let sql = `
    INSERT INTO customorders (client_name, client_email, type, description)
    VALUES ('${client_name}', '${client_email}', '${type}', '${description}')
    `;
  
    try {
      await db(sql);
      let result = await db("SELECT * FROM customorders");
      res.send(result.data);
    } catch (err) {
      res.status(500).send({ error: err.message });
    }
});
  
router.delete("/:id", async (req, res) => {
    let { id } = req.params;
    try {
      let result = await db(`SELECT * FROM customorders WHERE formid = ${id}`);
      if (result.data.length === 1) {
        await db(`DELETE FROM customorders WHERE formid = ${id}`);
        result = await db("SELECT * FROM customorders");
        res.send(result.data);
      } else {
        res.status(404).send({ error: "Order not found" });
      }
    } catch (err) {
      res.status(500).send({ error: err.message });
    }
});
  
   
module.exports = router;