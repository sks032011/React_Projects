
import Footer from './components/Footer/Footer'
import './App.css'
import Header from './components/Header/Header'

import { Outlet } from 'react-router-dom'

function App() {
  

  return (
    <>
      <Header/>
      < Outlet />
      {/* iise kya hota jaaha jaha ye doge wo change hongi but idhar header footer will stay same for all pages when u click on links  */}
      <Footer/>

    </>
  )
}

export default App
