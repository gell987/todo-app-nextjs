import React, { useState } from 'react'

const Todos = ({ todos, deleteTodo }) => {
  return (
    <div>
      <h2>Todos:</h2>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.task} <button onClick={() => deleteTodo(todo.id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Todos
