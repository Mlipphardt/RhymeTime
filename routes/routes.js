const express = require("express");

const router = express.Router();

const fetch = require("node-fetch");

router.get("/api/rhyme/:word", async (req, res) => {
  let word = req.params.word;
  let response = await fetch(`https://api.datamuse.com/words?rel_rhy=${word}`, {
    headers: {
      "Content-type": "Application/json",
    },
  });
  let rhymes = await response.json();
  res.json({
    rhymes: rhymes,
  });
});

module.exports = router;
