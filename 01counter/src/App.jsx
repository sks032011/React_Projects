import { useState } from 'react';
import './App.css'

function App() {
  let[counter,setCounter]=useState(15)
  // let counter=5;
  const addValue=()=>{
   counter=counter+1
   setCounter(counter)
   //counter ki nayi cvalue set ho jayegi
  }
  const decValue=()=>{
counter=counter-1;
setCounter(counter)  
  }
  return (
    <>
     <h1>Chai Aur React</h1>
      <h2>Counter Value:{counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <button onClick={decValue}>Decrease Value</button>
    </>
  )
}

export default App
