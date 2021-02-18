RhymeTime = {
  baseUrl: "https://itsrhymetime.herokuapp.com/api",
  results: [],
  page: 1,
  async getRhyme(word) {
    let response = await fetch(`${this.baseUrl}/rhyme/${word}`);
    let words = await response.json();
    this.writeToConsole(words);
    this.outputToGame(word, words);
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
    console.log(text.data[0])
  },
  outputToGame(word, results){
    console.log(results)
    this.log()
    display_notice("-----------------------------", "green")
    display_notice(`Rhyme results for: ${word}`, "green")
    display_notice("-----------------------------", "green")
    for(let i = 0; i < 10; i++){
    	display_notice( results.data[i].word, "green")
    }
  },
  log(){
    ow_Write('#output_main', '<span style="color: lightgreen;">[</span>'+'<span style="color: white;">RhymeTime</span>'+'<span style="color: blue;">' + ']' + 	         '</span>'+'<span style="color: white;">: </span> <span style="color: 'white';">'Testing...'</span>');
    }
};

display_notice("RhymeTime has been activated.", "blue")
console.log(RhymeTime);