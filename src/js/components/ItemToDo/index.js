class ItemToDo {
  constructor(props) {
    const {
      task
    } = props

    this.date = new Date()
    this.task = task
  }
}

export { ItemToDo }