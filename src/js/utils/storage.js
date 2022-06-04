class Storage {
  /**
   * Save data in session storage converted at json
   * @param {String} key - Name key of data.
   * @param {Any} payload - Data to save and convert to json
   * @returns {Boolean}
   */
  sessionSet(key, payload) {
    window.sessionStorage.setItem(key, JSON.stringify(payload))
    return true
  }

  /**
   * Get data saved in sessionStorage
   * @param {String} key - Key name data
   * @returns {Any} Data saved in sessionStorage
   */
  sessionGet(key) {
    return JSON.parse(window.sessionStorage.getItem(key))
  }

  /**
   * Delete data saved in sessionStorage
   * @param {*String} key - Key name data
   */
  sessionRemove(key) {
    window.sessionStorage.removeItem(key)
  }

  /**
   * Save data in localStorage converted at json
   * @param {String} key - Name key of data.
   * @param {Any} payload - Data to save and convert to json
   * @returns {Boolean}
   */
  localSet(key, payload) {
    window.localStorage.setItem(key, JSON.stringify(payload))
    return true
  }

  /**
   * Get data saved in localStorage
   * @param {String} key - Key name data
   * @returns {Any} Data saved in localStorage
   */
  localGet(key) {
    return JSON.parse(window.localStorage.getItem(key))
  }

  /**
   * Delete data saved in localStorage
   * @param {String} key - Key name data
   */
  localRemove(key) {
    window.localStorage.removeItem(key)
  }
}

export { Storage }
