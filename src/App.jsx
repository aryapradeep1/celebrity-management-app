import { useState } from 'react'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import ViewAttendee from './components/ViewAttendee'
import ViewTicket from './components/ViewTicket'
import ViewLongue from './components/ViewLongue'
import HomePage from './components/HomePage'
import NaviBar from './components/NaviBar'
import AddAttendee from './components/AddAttendee'
import AddTicket from './components/AddTicket'
import AddLounge from './components/AddLounge'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NaviBar/>
    <HomePage/>
      <ViewAttendee />
      <ViewTicket />
      <ViewLongue/>

    <AddAttendee/>
    <AddTicket/>
    <AddLounge/>
    </>
  )
}

export default App
