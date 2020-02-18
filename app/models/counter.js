
// the Counter model
class Counter {

  constructor() {
      this.c = 0;
      this.lastModified = new Date();
  }

  count() {
    ++this.c;
    this.lastModified = new Date();
  }

}

module.exports = Counter;
