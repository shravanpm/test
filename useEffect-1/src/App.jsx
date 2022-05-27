import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Todos from './components/Todos'
import Timer from './components/Timer'
import Stopwatch from './components/Stopwatch'

function App() {



  return (
    <div className="App">

      {/* <Todos /> */}
      {/* <Timer/>
       */}
      <Stopwatch/>
    </div>
  )
}

export default App
