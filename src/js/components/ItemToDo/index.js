import { Number } from '../../utils/number'

class ItemToDo {
  constructor(props) {
    const { state = true, task } = props

    this.id = Number.randomNumber()
    this.state = state
    this.date = new Date()
    this.task = task
  }

  /**
   * Base structure of the item To Do
   * It is static: It can called without instance
   * @param {{
   *  date: string
   *  task: string
   * }} - Data component
   * @returns {NodeString} - Return element HTML as a string
   */
  static itemComponentHTML = ({ id, state, date, task }) => {
    return `
      <span
        class="itemToDo js-item-todo"
        id="item-todo-${this.id}"
        data-date="${date}"
        data-state="${state}"
      >
        <label>
          <input
            type="checkbox"
            name="state"
            value="${state}"
          />

          <span>
            ${task}
          </span>
        </label>
      </span>
    `
  }
}

export { ItemToDo }
