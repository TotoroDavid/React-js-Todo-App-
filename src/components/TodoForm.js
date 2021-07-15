import React, { useState, useEffect } from 'react'

const initialFormValues = {
    title: '',
    description: ''
}

const TodoForm = ({ todoAdd, todoEdit, todoUpdate, setTodoEdit }) => {

    const [formValues, setFormValues] = useState(initialFormValues)
    const [error, setError] = useState(null)
    const [success, setSuccess] = useState(null)
    const { title, description } = formValues

    useEffect(() => {
        if (todoEdit) {
            setFormValues(todoEdit)
        } else {
            setFormValues(initialFormValues)
        }
    }, [todoEdit])

    const handleInputChange = (e) => {
        const changedFormValues = {
            ...formValues,
            [e.target.name]: e.target.value
        }
        setFormValues(changedFormValues)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (title.trim() === '') {
            setError('you must need put the title')
            return
        }
        if (description.trim() === '') {
            setError('you must need put an description')
            return
        }
        if (todoEdit) {
            //update
            todoUpdate(formValues)
            setSuccess('Update was successfully!!')
        } else {
            //add task
            todoAdd(formValues)
            setSuccess('Added successfully!!')
            setFormValues(initialFormValues)
        }
        setTimeout(() => {
            setSuccess(null)
        }, 2000)
        setError(null)
    }


    return (
        <div>
            <h2 className='text-center display-5' >{todoEdit ? 'Edit Task' : 'New Task'}</h2>
            {
                todoEdit &&
                (<button
                    onClick={() => setTodoEdit(null)}
                    className="btn btn-sm btn-warning mb-2">
                    cancel the edition
                </button>)
            }
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Title"
                    className="form-control"
                    value={title}
                    name='title'
                    onChange={handleInputChange}
                />
                <textarea
                    placeholder="Description"
                    className="form-control mt-2"
                    value={description}
                    name='description'
                    onChange={handleInputChange}
                >
                </textarea>
                <button
                    className="btn btn-primary mt-2 btn-block">
                    {todoEdit ? 'Update Task' : 'Add Task'}
                </button>
            </form>
            {
                error &&
                (
                    <div className='alert alert-danger mt-2'>
                        {error}
                    </div>
                )
            }
            {
                success && (
                    <div className='alert alert-success mt-2'>
                        {success}
                    </div>
                )
            }
        </div>
    )
}

export default TodoForm
