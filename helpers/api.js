import axios from "axios";

const baseRoute = "https://api.datamuse.com/";

const api = axios.create({
  baseURL: baseRoute,
});

export default class RhymeAPI {
  static routes = {
    main: "words?",
    rhyme: "rel_rhy=",
    related: "ml=",
    adjective: "rel_jjb=",
    topics: "topics=",
    suggest: "/sug?s=",
    associatedBy: "rel_trg=",
  };

  getRhyme(word) {
    return api.get(this.routes.main + this.rhyme + word);
  }

  getSynonym(word) {
    return api.get(this.routes.main + this.related + word);
  }

  getSuggestion(word) {
    return api.get(this.routes.main + this.suggest + word);
  }

  getAdjective(word) {
    return api.get(this.routes.main + this.adjective + word);
  }

  getAdjectiveByTopic(word, topic) {
    return api.get(
      this.routes.main + this.adjective + word + "?" + this.topics + topic
    );
  }

  getAssociatedBy(word) {
    return api.get(this.routes.main + this.associatedBy + word);
  }
}
