import { useEffect, useState } from 'react'

import './App.css'
import { Todoprovider } from './contexts'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    // add new todo to previous ones without overwriting ....todo is an object having multiple entries
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev])
  }

  const updatedtodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id == id ? todo : prevTodo)))
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? { ...prevTodo, completed: !prevTodo.completed } : prevTodo))
  }
  // whenever u reload u wnt to query the local storageand bring the data from there ----useffect 
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))
    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])

  //we dont want to get todos all the time but we set it whenever todos change 
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  return (
    <Todoprovider value={{ todos, addTodo, updatedtodo, deleteTodo, toggleComplete }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            
            {/* Todo form goes here */}
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            
            {/*Loop and Add TodoItem here */}
            {todos.map((todo) => (
              <div className='w-full' key={todo.id}>
                <TodoItem todo={todo} />
              </div>
            ))}

          </div>
        </div>
      </div>
    </Todoprovider>
  )
}

export default App
