
import './App.css'
import Card from './assets/Component/Card'
function App() {
  
let arr=[1," ",2]
  return (
    <>
      <h1 className='bg-green-300 rounded-xl p-4 text-black' >Tailwind Test</h1>
        
        <Card username="yo sks" arra={arr}/>
    </>
  )
}

export default App
