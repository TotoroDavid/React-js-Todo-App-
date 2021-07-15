import React, { useEffect, useState } from 'react'
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'

const initialTodo = [
  {
    id: 1,
    title: 'Todo 1',
    description: 'description todo number 1',
    complete: false
  },
  {
    id: 2,
    title: 'Todo 2',
    description: 'description todo number 2',
    complete: true
  }
]

const App = () => {
  const localTodos = JSON.parse(localStorage.getItem('todos'))

  const [todos, setTodos] = useState(localTodos || initialTodo)
  const [todoEdit, setTodoEdit] = useState(null)

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  // -that's the same
  // const state = useState(initialTodo)
  // const todos = state[0]
  // const setTodos = state[1]

  const todoDelete = (todoId) => {

    if (todoEdit && todoId === todoEdit.id) {
      setTodoEdit(null)
    }

    const changedTodos = todos.filter(todo => todo.id !== todoId)
    setTodos(changedTodos)
  }

  const todoToggleComplete = (todoId) => {
    // const changedTodos = todos.map(todo => {
    //   const todoEdit = {
    //     ...todo,
    //     complete: !todo.complete
    //   }
    //   if (todo.id === todoId) {
    //     return todoEdit
    //   } else {
    //     return todo
    //   }
    // })
    // setTodos(changedTodos)

    // -------

    const changedTodos = todos.map(todo => (
      todo.id === todoId
        ? { ...todo, complete: !todo.complete }
        : todo
    ))
    setTodos(changedTodos)
  }

  //   const changedTodos = todos.map(todo =>
  //     todo.id === todoId ? { ...todo, complete: !todo.complete } : todo)
  //   setTodos(changedTodos)
  // }

  const todoAdd = (todo) => {

    const newTodo = {
      id: Date.now(),
      ...todo,
      complete: false
    }

    const changedTodos = [
      newTodo,
      ...todos
    ]

    setTodos(changedTodos)
  }

  const todoUpdate = (todoEdit) => {
    const changedTodos = todos.map(todo => (
      todo.id === todoEdit.id
        ? todoEdit
        : todo
    ))
    setTodos(changedTodos)
  }

  return (
    <div className="container mt-4">
      <div className='row'>
        <div className='col-8'>
          <TodoList
            todos={todos}
            todoDelete={todoDelete}
            todoToggleComplete={todoToggleComplete}
            setTodoEdit={setTodoEdit}
          />
        </div>
        <div className='col-4'>
          <TodoForm
            todoAdd={todoAdd}
            todoEdit={todoEdit}
            todoUpdate={todoUpdate}
            setTodoEdit={setTodoEdit}
          />
        </div>
      </div>
    </div>
  )
}

export default App
