import { useState, useCallback } from 'react'

function App() {
  const [length, setlength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [characterAllowed, setCharacterAllowed] = useState(false)
  const [password, setpassword] = useState()


  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) {
      str += "0123456789"
    }
    if (characterAllowed) {
      str += "!@#$%^&*()_+~}{[]"
    }

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setpassword(pass);


  }, [length, numberAllowed, characterAllowed, setpassword])

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-black text-white p-4">
        <div className="bg-[#313131] w-full max-w-md mx-auto shadow-md rounded-lg p-6">
          <h1 className="text-center text-white text-3xl font-semibold mb-4">
            Password generator
          </h1>
          <div className="flex shadow rounded-lg overflow-hidden">
            <input
              type="text"
              value={password}
              className="outline-none w-full py-2 px-3 text-gray-300 bg-white/10 placeholder-gray-400"
              placeholder="Password"
              readOnly
            />
            <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
          </div>
          <div className='flex text-md gapx-2'>
            <div className='flex item-center gap-x-1 '>
              <input
                type="range"
                min={6}
                max={100}
                value={length}
                className='cursor-pointer'
                onChange={(e) => {
                  setlength(e.target.value)
                }}
              />
              <label>Length: {length}</label>
            </div>
            <div className='flex item-center gap-x-2'>
              <input
                type="checkbox"
                defaultChecked={numberAllowed}
                id='numberInput'
                onChange={() => {
                  setNumberAllowed((prev) => (!prev))
                }}
              />
              <label htmlFor="numberInput">Numbers</label>
            </div>
            <div className='flex item-center gap-x-2'>
              <input
                type="checkbox"
                defaultChecked={characterAllowed}
                id='characterInput'
                onChange={() => {
                  setCharacterAllowed((prev) => (!prev))
                }}
              />
              <label htmlFor="characterInput">Characters</label>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
