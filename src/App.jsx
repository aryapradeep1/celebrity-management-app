import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import AddAttendee from './components/AddAttendee'
import ViewAttendee from './components/ViewAttendee'
import ViewTicket from './components/ViewTicket'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AddAttendee />
      <ViewAttendee />
      <ViewTicket />
    </>
  )
}

export default App
