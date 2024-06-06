import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
     <h1>REDUX</h1>
     <AddTodo/>
     <Todos/>
    </>
  )
}

export default App
// TO WRAP U NEED PROVIDER AND STORE DO THEM IN MAIN.JSX 