import { useState } from 'react'
import OpulentLogo from './assets/LOGO-SOLO-Opulent.png'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        {/* <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a> */}

          <img src={OpulentLogo} className="logo" alt="logo" />

      </div>
      <h1>Opulent Adobes</h1>
      <h2>Coming Soon!</h2>
      
    </>
  )
}

export default App
