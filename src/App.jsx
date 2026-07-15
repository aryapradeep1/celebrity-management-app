import { useState } from 'react'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import ViewAttendee from './components/ViewAttendee'
import ViewTicket from './components/ViewTicket'
import ViewLongue from './components/ViewLongue'
import HomePage from './components/HomePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <HomePage/>
      <ViewAttendee />
      <ViewTicket />
      <ViewLongue/>

    </>
  )
}

export default App
