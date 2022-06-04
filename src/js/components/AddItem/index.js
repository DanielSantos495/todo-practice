import { ItemToDo } from '../ItemToDo'

/**
 * Component with the logic to add To Do items
 */
class AddItem extends HTMLElement {
  constructor() {
    super()
    this.limitMax = 50
    this.limitMin = 6
    this.inputContent = this.querySelector('[name="content"]')
    this.form = this.querySelector('form')
    this._addEvents()
  }

  /**
   * Initlization of events in the component
   */
  _addEvents() {
    this.inputContent.addEventListener('input', this._onInput.bind(this))
    this.form.addEventListener('submit', this._onSubmit.bind(this))
  }

  _onInput(e) {
    this._createItem(e)
  }

  /**
   * Create item to do with the ItemToDo class.
   * Add limit to input
   * @param {Object} e - Event object
   */
  _createItem(e) {
    if (e.target.value.length > this.limitMax) {
      e.target.value = e.target.value.slice(0, this.limitMax) // Put limit
    } else {
      this.itemContent = new ItemToDo({
        task: e.target.value,
      })
    }
  }

  /**
   * Send new item
   * Initial Items addeds
   * @param {Object} e - Event object
   */
  _onSubmit(e) {
    e.preventDefault()

    if (this.itemContent.task.length > this.limitMin) {
      /**
       * Here go to send API and render item - For now only render item
       */

      this.renderItem(ItemToDo.itemComponentHTML(this.itemContent))
    }
  }

  /**
   * Render items as first element
   * @param {NodeString} item - HTML as a String
   */
  renderItem(item) {
    document
      .querySelector('render-items')
      .insertAdjacentHTML('afterbegin', item)
  }
}

customElements.define('add-item', AddItem)
