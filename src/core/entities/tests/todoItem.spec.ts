import { TodoItem, type TodoItemType } from '../todoItem'

describe('TodoItem Class', () => {
  test('It should be possible to create an Todo item', () => {
    const newItem: TodoItemType = {
      id: 1,
      title: 'test',
      completed: false
    }
    const todo = new TodoItem(newItem)
    expect(todo).toEqual(newItem)
  })

  test('If an id is not provided, one must be generated automatically', () => {
    const newItem: TodoItemType = {
      title: 'test2',
      completed: false
    }
    const todo = new TodoItem(newItem)
    expect(todo.id).toBeDefined()
  })
})
