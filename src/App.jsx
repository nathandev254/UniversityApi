import { useState } from 'react'
import Nav from './components/navbar'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Nav/>
    </div>
  )
}

export default App
