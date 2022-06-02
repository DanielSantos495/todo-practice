class ItemToDo {
  constructor(props) {
    const { state = true, task } = props

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
  static itemComponentHTML = ({ state, date, task }) => `
    <span data-date="${date}" data-state="${state}">
      ${task}
    </span>
  `
}

export { ItemToDo }
