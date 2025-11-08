import { useState } from "react";

function App() {

  let [counter, setcounter] = useState(10) // usestate hook

  const addvalue = () => {
    setcounter(prevCounter => prevCounter + 1)
    setcounter(prevCounter => prevCounter + 1)
    setcounter(prevCounter => prevCounter + 1)

  }

  const minusvalue = () => {
    setcounter(counter => counter - 1)
    setcounter(counter => counter - 1)
    setcounter(counter => counter - 1)
    setcounter(counter => counter - 1)
  }


  return (
    <>
      <h1>Jash aur React</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addvalue}>Increment {counter}</button><br /><br />
      <button onClick={minusvalue}>Decrement {counter}</button>
    </>
  )
}

export default App
