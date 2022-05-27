import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Navbar from "./components/Navbar"
import Filters from "./components/Filters"
import Offers from "./components/Offers"
import Restaurents from "./components/Restaurents"

function App() {
  

  return (
    <div>
      <Navbar/>
      <Filters/>
     
      <Offers/>
      <Restaurents/>
      
    </div>
  )
}

export default App
