import { type TodoItem } from './todoItem'

export class Todos {
  todos: TodoItem[]

  constructor () {
    this.todos = []
  }

  public getTodoById (id: number): TodoItem {
    const todo = this.todos.find((todo) => todo.id === id)
    if (todo) {
      return todo
    } else {
      throw new Error('Todo not found')
    }
  }

  public getTodos (): TodoItem[] {
    return this.todos
  }

  public addTodo (todo: TodoItem): void {
    this.todos.push(todo)
  }

  public removeTodoById (id: number): void {
    this.todos = this.todos.filter((todo) => todo.id !== id)
  }

  public updateTodo (todo: TodoItem): void {
    const index = this.todos.findIndex((t) => t.id === todo.id)
    if (index === -1) {
      throw new Error('Todo not found')
    }
    this.todos[index] = todo
  }
}
