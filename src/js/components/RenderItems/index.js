import { Filter } from '../../utils/filter'

export class RenderItems extends HTMLElement {
  constructor() {
    super()

    this.itemToDoObserver()
  }

  /**
   * Observe node inserted in RenderItems component.
   * Filter Element (Node)
   * Init event calling @see initItemsTodo
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

        if (elementAdded) this.initItemToDo(elementAdded)
      }
    }
  }

  /**
   * Util observe render items child (PDTE DOCUMENTATION)
   */
  itemToDoObserver() {
    const options = {
      childList: true,
      subtree: true,
    }

    const observer = new MutationObserver(this._cbMutationObserver.bind(this))

    observer.observe(this, options)
  }

  /**
   * Initial event change to each item
   */
  initItemToDo(item) {
    if (item) {
      item.addEventListener('change', this._onChange.bind(this))
    }
  }

  /**
   * Callback initItemToDo
   * @see initItemToDo
   * @see changeState
   */
  _onChange(e) {
    this.changeState(e)
  }

  /**
   * Change state to the Item ToDo with the Frontend
   * @param {Object} e - Object event
   */
  changeState(e) {
    e.target.value = e.target.checked
    console.log(e.target.value)
  }
}

customElements.define('render-items', RenderItems)
