import React from 'react'

const Todo = ({ todos, todoDelete, todoToggleComplete, setTodoEdit }) => {
    return (
        <div>
            <div className='card mt-2'>
                <div className='card-body'>
                    <h3 className='card-title text-end'>
                        {todos.title}
                        <button
                            style={{ color: 'black' }}
                            onClick={() => todoToggleComplete(todos.id)}
                            className={`btn btn-sm 
                                ${todos.complete
                                    ? 'btn-outline-success'
                                    : 'btn-success'} btn-outline-success ml-2`}
                        >
                            {
                                todos.complete ? 'finished!!'
                                    : 'finis ...'
                            }
                        </button>
                    </h3>
                    <p className='card-text text-end'>
                        {todos.description}
                    </p>
                    <hr />
                    <div className='d-flex justify-content-end'>
                        <button
                            className='btn btn-sm btn-outline-primary'
                            onClick={() => setTodoEdit(todos)}
                        >
                            Edit
                        </button>
                        <button onClick={() => todoDelete(todos.id)}
                            className='btn btn-sm btn-outline-danger'>
                            delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Todo
