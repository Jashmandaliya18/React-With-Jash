import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card.jsx'

function App() {
  let myObj = {
    name: "Jash",
    age: 19
  }
  let newArr = [1, 2, 3, 4, 5]

  const [count, setCount] = useState(0)
  return (
    <>
      <h1 className='bg-green-500 p-4 rounded-xl text-black font-medium'>Tailwind Test</h1>
      <Card userName="Jash with React" someObj={myObj} someArr={newArr} />
    </>
  )
}

export default App
