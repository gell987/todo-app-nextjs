import React, { useState } from 'react'
import 'C:/Users/GELL/desktop/nextjs-todo-list-main/pages/styles/global.css'


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

const AddTodo = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    addTodo(newTodo);
    setNewTodo("");
  };

  return (
    <form onSubmit={handleSubmit}>
      
      <div><center>
      <input
        type="text"
        placeholder="Add a new todo"
        value={newTodo}
        onChange={e => setNewTodo(e.target.value)}
      />
        <button type="submit">Add</button>
        </center></div>
    </form>
  );
};

const Home = () => {
  const [todos, setTodos] = useState([
    { id: 1, task: "Learn Next.js" },
    { id: 2, task: "Build Todo App" },
    { id: 3, task: "Make it the coolest looking" }
  ]);

  const addTodo = newTodo => {
    setTodos([...todos, { id: todos.length + 1, task: newTodo }]);
  };

  const deleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    
    <div>
      <center><h1>Welcome to <span className='white'>the Todo App!</span></h1></center>
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} deleteTodo={deleteTodo} />
      
    </div>
  );
};

export default Home