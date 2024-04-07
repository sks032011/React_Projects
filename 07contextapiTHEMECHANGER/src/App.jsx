

// tailwind config me darkMode:"class" avashy kren 
import { useState,useEffect } from 'react'
import './App.css'
import { ThemeContextProvider } from './contexts/theme'
import ThemeBtn from './components/Themebtn'
import Card from './components/Card'
function App() {

  const [themeMode, setThemeMode] = useState("light")
  const lightTheme = () => {
    setThemeMode("light")
    document.querySelector("body").style.backgroundColor="black"
   
  }
  const darkTheme = () => {
    setThemeMode("dark")
    document.querySelector("body").style.backgroundColor="grey"
  }
 
  useEffect(() => {
 document.querySelector('html').classList.remove("light","dark")
 document.querySelector('html').classList.add(themeMode)
  }, [themeMode])


  return (
    // ab values ka access lenge 
    <ThemeContextProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn/>
          </div>

          <div className="w-full max-w-sm mx-auto">
          <Card/>
          </div>
        </div>
      </div>
    </ThemeContextProvider>
  )
}

export default App
