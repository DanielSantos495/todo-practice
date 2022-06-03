class Filter {
  /**
   * Receive a css class to search in a array of elements
   * @param {Array} array - Array where search
   * @param {String} cssClass - Css to search
   * @returns {Array}
   */
  static filterElFromCssClass = (array, cssClass) => {
    const elementsAdded = array.filter(
      (el) => el.classList && el.classList.contains(cssClass) && el
    )

    if (elementsAdded.length) {
      return elementsAdded[0]
    } else {
      return null
    }
  }
}

export { Filter }
