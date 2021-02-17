const RhymeAPI = require("../helpers/api");

const express = require("express");

const router = express.Router();

router.get("/api/rhyme/:word", (req, res) => {
  let word = req.params.word;
  RhymeAPI.getRhyme(word).then((words) => {
    res.json({
      data: words.data,
    });
  });
});

router.get("/api/synonym/:word", (req, res) => {
  let word = req.params.word;
  RhymeAPI.getSynonym(word).then((words) => {
    res.json({
      data: words.data,
    });
  });
});

router.get("/api/adjective/:word", (req, res) => {
  let word = req.params.word;
  RhymeAPI.getAdjective(word).then((words) => {
    res.json({
      data: words.data,
    });
  });
});

router.get("/api/definition/:word", (req, res) => {
  let word = req.params.word;
  RhymeAPI.getDefinition(word).then((words) => {
    res.json({
      data: words.data,
    });
  });
});

router.get("/api/adjective/:word/:topic", (req, res) => {
  let word = req.params.word;
  let topic = req.params.topic;
  RhymeAPI.getAdjectiveByTopic(word, topic).then((words) => {
    res.json({
      data: words.data,
    });
  });
});

router.get("/api/suggestion/:word", (req, res) => {
  let word = req.params.word;
  RhymeAPI.getSuggestion(word).then((words) => {
    res.json({
      data: words.data,
    });
  });
});

router.get("/api/associated/:word", (req, res) => {
  let word = req.params.word;
  RhymeAPI.getAssociatedBy(word).then((words) => {
    res.json({
      data: words.data,
    });
  });
});

module.exports = router;
