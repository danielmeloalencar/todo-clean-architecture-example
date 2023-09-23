import { type TodoItem } from '../todoItem'
import { Todos } from '../todos'

describe('Todos Class', () => {
  test('It should be possible to create an instance of Todos', () => {
    const todos = new Todos()
    expect(todos).toBeDefined()
  })

  test('It should be possible to add an item to the Todo list', () => {
    const newItem: TodoItem = {
      id: 1,
      title: 'test',
      completed: false
    }

    const todos = new Todos()
    todos.addTodo(newItem)
    expect(todos.getTodos()).toHaveLength(1)
  })

  test('It should be possible to list all items in the Todo list', () => {
    const newItem1: TodoItem = {
      id: 1,
      title: 'test',
      completed: false
    }

    const newItem2: TodoItem = {
      id: 2,
      title: 'test2',
      completed: false
    }

    const todos = new Todos()
    todos.addTodo(newItem1)
    todos.addTodo(newItem2)
    expect(todos.getTodos()).toHaveLength(2)
  })

  test('it should be possible to find an item by id in the Todo list', () => {
    const newItem: TodoItem = {
      id: 1,
      title: 'test',
      completed: false
    }

    const todos = new Todos()
    todos.addTodo(newItem)
    const item = todos.getTodoById(1)
    expect(item.title).toEqual('test')
  })

  test('It should be possible to delete an item from the Todo list', () => {
    const newItem: TodoItem = {
      id: 1,
      title: 'test',
      completed: false
    }

    const todos = new Todos()
    todos.addTodo(newItem)
    expect(todos.getTodos()).toHaveLength(1)
    todos.removeTodoById(1)
    expect(todos.getTodos()).toHaveLength(0)
  })

  test('It should be possible to update an item from the Todo list', () => {
    const newItem: TodoItem = {
      id: 1,
      title: 'test',
      completed: false
    }

    const updatedItem: TodoItem = {
      id: 1,
      title: 'New Todo Item',
      completed: false
    }

    const todos = new Todos()
    todos.addTodo(newItem)
    expect(todos.getTodos()).toHaveLength(1)
    todos.updateTodo(updatedItem)
    expect(todos.getTodos()[0].title).toEqual('New Todo Item')
  })
})
