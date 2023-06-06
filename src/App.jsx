import { useState } from 'react'
import './App.css'
import PizzaOrder from './components/PizzaOrder'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <PizzaOrder/>
    </>
  )
}

export default App


