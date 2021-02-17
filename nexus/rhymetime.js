//Code for Nexus game client plugin. Meant to be executed in a browser environment.
//Will be compiled.

const RTHub = {
  baseUrl: "https://www.itsrhymetime.herokuapp.com/api/",
  results: [],
  page: 1,
  async getRhyme(word) {
    let response = await fetch(`${this.baseUrl}/rhyme/${word}`);
    let words = await response.json();
    this.writeToConsole(words);
  },
  async getDefinition(word) {
    let response = await fetch(`${this.baseUrl}/definition/${word}`);
    let words = await response.json();
    this.writeToConsole(words);
  },
  async getSynonym(word) {
    let response = await fetch(`${this.baseUrl}/synonym/${word}`);
    let words = await response.json();
    this.writeToConsole(words);
  },
  async getAdjective(word) {
    let response = await fetch(`${this.baseUrl}/adjective/${word}`);
    let words = await response.json();
    this.writeToConsole(words);
  },
  async getAdjectiveByTopic(word, topic) {
    let response = await fetch(`${this.baseUrl}/adjective/${word}/${topic}`);
    let words = await response.json();
    this.writeToConsole(words);
  },
  async getSuggestion(word) {
    let response = await fetch(`${this.baseUrl}/suggestion/${word}`);
    let words = await response.json();
    this.writeToConsole(words);
  },
  async getAssociatedBy(word) {
    let response = await fetch(`${this.baseUrl}/associated/${word}`);
    let words = await response.json();
    this.writeToConsole(words);
  },
  pageForward() {
    this.page++;
  },
  writeToConsole(text) {
    console.log("Writing to console...");
    console.log(text);
  },
};

getRhyme();
