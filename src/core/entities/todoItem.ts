export interface TodoItemType {
  id?: number
  title: string
  completed: boolean
}

export class TodoItem {
  id?: number
  title: string
  completed: boolean

  constructor (todo: TodoItemType) {
    this.id = (!todo.id) ? Math.floor(Math.random() * 1000) : todo.id
    this.title = todo.title
    this.completed = todo.completed
  }
}
