import { useState } from "react";

function App() {

  let [counter, setcounter] = useState(10) // usestate hook

  const addvalue = () => {
    if (counter < 20) {
      setcounter(counter + 1)
    }
  }

  const minusvalue = () => {
    if (counter > 0) {
      setcounter(counter - 1)
    }
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
