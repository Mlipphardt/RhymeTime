const axios = require("axios");

const baseRoute = "https://api.datamuse.com/";

const api = axios.create({
  baseURL: baseRoute,
});

class RhymeAPI {
  static routes = {
    main: "words?",
    rhyme: "rel_rhy=",
    definition: "&md=d",
    spelledLike: "sp=",
    related: "ml=",
    adjective: "rel_jjb=",
    topics: "topics=",
    suggest: "sug?s=",
    associatedBy: "rel_trg=",
  };

  static getRhyme(word) {
    return api.get(this.routes.main + this.routes.rhyme + word);
  }

  static getDefinition(word) {
    return api.get(
      this.routes.main + this.routes.spelledLike + word + this.routes.definition
    );
  }

  static getSynonym(word) {
    return api.get(this.routes.main + this.routes.related + word);
  }

  static getSuggestion(word) {
    return api.get(this.routes.suggest + word);
  }

  static getAdjective(word) {
    return api.get(this.routes.main + this.routes.adjective + word);
  }

  static getAdjectiveByTopic(word, topic) {
    return api.get(
      this.routes.main +
        this.routes.adjective +
        word +
        "?" +
        this.routes.topics +
        topic
    );
  }

  static getAssociatedBy(word) {
    return api.get(this.routes.main + this.routes.associatedBy + word);
  }
}

module.exports = RhymeAPI;
