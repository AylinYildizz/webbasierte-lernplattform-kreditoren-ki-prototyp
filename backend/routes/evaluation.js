const express = require("express");
const fs = require("fs");
const router = express.Router();

router.post("/", (req, res) => {
  const data = req.body;

  const filePath = "./evaluation-results.json";

  let existing = [];
  if (fs.existsSync(filePath)) {
    existing = JSON.parse(fs.readFileSync(filePath));
  }

  existing.push({
    date: new Date(),
    answers: data.answers,
  });

  fs.writeFileSync(filePath, JSON.stringify(existing, null, 2));

  res.json({ status: "saved" });
});

module.exports = router;