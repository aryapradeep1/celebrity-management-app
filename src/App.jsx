import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import AddAttendee from './components/AddAttendee'
import AddTicket from './components/AddTicket'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <AddAttendee/>
    <AddTicket/>
    </>
  )
}

export default App
