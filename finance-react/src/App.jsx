import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import CreatedBy from './components/CreatedBy'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>APP FINANCE</h1>
      <CreatedBy/>
    </>
  )
}

export default App
