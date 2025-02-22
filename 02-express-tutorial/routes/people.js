const express = require("express");
const router = express.Router();
const { addPerson, getPeople, getPerson, updates, remove } = require("../controllers/people.js");

router.get("/", getPeople)

router.get("/:id", getPerson)

router.post("/", addPerson)

router.put("/:id", updates)

router.delete("/:id", remove)

module.exports = router 