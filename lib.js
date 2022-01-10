class Lib {
  #logger;

  /**
   * 
   * @param {number} id
   * @param {name} name
   */
  init(id, name) {
    if (!this.#logger) {
      this.#logger = {id: id, name: name};
    }
  }

  async logId() {

    console.log(`id -> `, this.#logger.id);
  }


}

module.exports = new Lib()
