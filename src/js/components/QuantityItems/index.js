class QuantityItems extends HTMLElement {
  constructor() {
    super()
    this.quantityItemsRendered()
  }

  /**
   * Get quantity of items added and rendered
   */
  quantityItemsRendered() {
    this.textContent = `${
      document.querySelector('render-items').childElementCount
    } ${this.dataset.text}`
  }
}

customElements.define('quantity-items', QuantityItems)
