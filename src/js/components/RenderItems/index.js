import { Filter } from '../../utils/filter'
import { Storage } from '../../utils/storage'

export class RenderItems extends HTMLElement {
  constructor() {
    super()
    this.storage = new Storage()
    this.itemToDoObserver()
    this.append(...this.checkCustomCache())
  }

  /**
   * Check local storage if there are items saved
   * Receive items as a string, use DOMParse to get HTML and filter elements from the HTML
   * Section API is a prototpy
   * @returns {Array} - Array of items node
   */
  checkCustomCache() {
    const API = false
    if (API) {
    } else if (this.storage.localGet('lastItemsSaved')) {
      return [
        ...new DOMParser()
          .parseFromString(this.storage.localGet('lastItemsSaved'), 'text/html')
          .querySelectorAll('.itemToDo'),
      ]
    }
  }

  /**
   * Observe node inserted in RenderItems component.
   * Filter Element (Node)
   * Init event calling @see initEventsItemToDo
   * @param {Object} mutationList - They are properties mutations
   */
  _cbMutationObserver(mutationList) {
    for (const mutation of mutationList) {
      if (mutation.type === 'childList') {
        const elementAddedsArray = [...mutation.addedNodes]

        const elementAdded = Filter.filterElFromCssClass(
          elementAddedsArray,
          'itemToDo'
        )

        if (elementAdded) {
          this.initEventsItemToDo(elementAdded)
          this.saveItemsAdded(mutation.target.innerHTML)
        }
      }
    }
  }

  /**
   * Observe item added to the DOM in the element parent : this (render-items)
   * Use MutationObserve
   * Callback @see _cbMutationObserver
   */
  itemToDoObserver() {
    const options = {
      childList: true,
    }
    const observer = new MutationObserver(this._cbMutationObserver.bind(this))

    observer.observe(this, options)
  }

  /**
   * Initial event change to each item added
   * @param {Node} item - Node of item added
   */
  initEventsItemToDo(item) {
    if (item) {
      item.addEventListener('change', this._onChange.bind(this, item))
    }
  }

  /**
   * Callback initItemToDo
   * @param {Object} e - Change event object
   * @see initEventsItemToDo
   */
  _onChange(item, e) {
    this.changeState(item, e)
  }

  /**
   * Change state to the Item ToDo with the Frontend
   * @param {Object} e - Change event object
   * @see initEventsItemToDo
   */
  changeState(item, e) {
    e.target.value = e.target.checked
    item.dataset.state = e.target.value

    /**
     * Here go to send API or not - (Perhaps when close browser window) - For now only change state
     */
  }

  /**
   * Last items created are saved in localStorage
   * @param {Object} payload - Item created
   */
  saveItemsAdded(payload) {
    this.storage.localSet('lastItemsSaved', payload)
  }
}

customElements.define('render-items', RenderItems)
