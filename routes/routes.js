const RhymeAPI = require("../helpers/api");

const express = require("express");

const router = express.Router();

router.get("/api/rhyme/:word", async (req, res) => {
  let word = req.params.word;
  RhymeAPI.getRhyme(word).then((rhymes) => {
    console.log(rhymes);
    res.json({
      rhymes: rhymes.data,
    });
  });
});

module.exports = router;
