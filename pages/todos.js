import React, { useState } from 'react'

const Todos = () => {
  const [todos, setTodos] = useState([
    { id: 1, task: 'Learn Next.js' },
    { id: 2, task: 'Build Todo App' },
    { id: 3, task: 'Make it the coolest looking' }
  ])

  return (
    <div>
      <h2>Todos:</h2>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.task}</li>
        ))}
      </ul>
    </div>
  )
}

export default Todos