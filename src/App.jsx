import { useState } from 'react'

import './App.css'
import { Route, Routes } from 'react-router-dom'
import NabBar from './component/NabBar'
import Add from './component/Add'
import Home from './component/Home'

function App() {
  const [count, setCount] = useState(0)

  return (

    <>
    <h1 style={{color:'aqua'}}>Welcome</h1>
    <NabBar/>
    <Routes>
        <Route path='/add' element={<Add/>}/>
        
        <Route path='/home' element={<Home/>}/>
        </Routes>
    
      
    </>
  )
}

export default App
