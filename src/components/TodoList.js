import React from 'react'
import Todo from './Todo'

const TodoList = ({ todos, todoDelete, todoToggleComplete, setTodoEdit }) => {
    return (
        <div>
            <h2 className='text-end display-4'>TodoList</h2>
            {
                todos.length === 0
                    ? (
                        <div className='alert alert-primary'>
                            No task at the moment. Please add a task
                        </div>
                    ) : (
                        todos.map(todo => (
                            <Todo
                                todos={todo}
                                key={todo.id}
                                todoDelete={todoDelete}
                                todoToggleComplete={todoToggleComplete}
                                setTodoEdit={setTodoEdit}
                            />
                        ))
                    )
            }
        </div>
    )
}

export default TodoList
