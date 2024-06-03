import { useState,useCallback,useEffect, useRef } from 'react'

import './App.css'

function App() {
  const passRef= useRef(null);
  const [length, setLength] = useState(8)
  const [charAllowed, setCharAllowed] = useState(false)
  const [numberAllowed, setNumberAllowed] = useState(false) 
  const [password, setPassword] = useState("")
  
  const passwordgen=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(charAllowed)str+="!@#$%^&*~?"
    if(numberAllowed)str+="0123456789"
    for (let i = 1; i <= length; i++) {
      let char=Math.floor(Math.random()*str.length+1)
      pass+=str.charAt(char)
    }
    setPassword(pass)
  },[length,charAllowed,numberAllowed,setPassword]) 
  

  
  const passcopy=useCallback(()=>{
    passRef.current?.select();
    passRef.current?.setSelectionRange(0,100);
    window.navigator.clipboard.writeText(password)
  },[password])
  

  useEffect(() => {
    
  passwordgen()
    
  }, [length,charAllowed,numberAllowed,setPassword])
  // setpass dediya jisse ye optimise ho jaye ...


  return (
    <>
     <div className='w-full max-w-full mx-auto flex flex-col justify-center  shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
      <h1 className='text-black text-center mb-5 text-5xl  '>Password generator</h1>
      <div className=" flex shadow rounded-lg overflow-hidden mb-4">
        <input type="text"
        value={password}
        className='outline-none bg-white text-orange-500 text-3xl w-screen py-2 px-10'
        placeholder='password'
        readOnly
        ref={passRef}
        />
        <button onClick={passcopy} className='outline-none bg-blue-600 text-white px-3 py-0.5 shrink-0'>copy</button>
      </div>
      <div className="flex text-sm gap-x-2">
      <div className="flex items-center gap-x-1">
      <input type="range"
      value={length}
      min={6}
      max={100}
      className='cursor-pointer'

      onChange={(e)=>{setLength(e.target.value)}}
      
      />
      <label className='text-centre flex ml-6 mb-3 text-3xl'>Length is @{length}</label>
         
     </div>
     
     <div className="flex items-center gap-x-3  ml-6 mb-3 text-3xl">
      <input 
      type="checkbox"
      defaultChecked={numberAllowed}
      id='numberInput'
      onChange={()=>{setNumberAllowed((prev)=>!prev)}}
      />
       <label className='text-centre flex  mb-2 text-2xl'>Numbers</label>
     </div>
     <div className="flex items-center gap-x-3  ml-6 mb-3 text-3xl">
      <input 
      type="checkbox"
      defaultChecked={charAllowed}
      id='charInput'
      onChange={()=>{setCharAllowed((prev)=>!prev)}}
      />
       <label className='text-centre flex  mb-2 text-2xl'>Characters</label>
     </div>
     </div></div>
    </>
  )
}

export default App


