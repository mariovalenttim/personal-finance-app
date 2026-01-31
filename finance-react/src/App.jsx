import { useState } from 'react'
import 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



import CreatedBy from './components/CreatedBy'
import Login from './components/Login'
import CreateAccount from './components/CreateAccount'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
      <BrowserRouter>
      <>
          <Routes>
              <Route path='/' element={<Login/>}/>
              <Route path='/CreateAccount' element={<CreateAccount/>}/>
          </Routes>
      </>
      </BrowserRouter>
  )
}

export default App
