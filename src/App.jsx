import { useState } from 'react'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import ViewAttendee from './components/ViewAttendee'
import ViewTicket from './components/ViewTicket'
import ViewLongue from './components/ViewLongue'
import HomePage from './components/HomePage'
import NaviBar from './components/NaviBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NaviBar/>
    <HomePage/>
      <ViewAttendee />
      <ViewTicket />
      <ViewLongue/>

    </>
  )
}

export default App
