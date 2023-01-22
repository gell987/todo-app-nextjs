import React, { useState } from 'react'

const AddTodo = () => {
  const [newTodo, setNewTodo] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    console.log(newTodo)
    setNewTodo('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a new todo"
        value={newTodo}
        onChange={e => setNewTodo(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  )
}

export default AddTodo
