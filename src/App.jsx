import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import AddAttendee from './components/AddAttendee'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <AddAttendee/>
    </>
  )
}

export default App
