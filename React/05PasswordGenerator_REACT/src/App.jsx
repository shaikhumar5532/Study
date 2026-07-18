import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setpassword] = useState("")

  //useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*-_={}[]`"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setpassword(pass)
  }, [length, numberAllowed, charAllowed, setpassword]);

  const copyPasswordToClipbord = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <>
      <div className='w-full max-w-2xl mx-auto mt-20 p-8 shadow-2xl rounded-2xl overflow-hidden mb-4 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 border border-gray-700'>

        <h1 className='text-white text-center my-5 text-3xl font-bold tracking-wide'>
          Passwowrd generator
        </h1>

        <div className='flex shadow-lg rounded-xl overflow-hidden mb-8 bg-gray-800 border border-gray-700'>
          <input
            type="text"
            value={password}
            className='outline-none w-full py-4 px-5 bg-gray-800 text-purple-400 font-mono text-lg tracking-wider placeholder-gray-500'
            placeholder='password'
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipbord}
            className='outline-none bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold px-6 py-4 shrink-0 cursor-pointer transition-all duration-300'
          >copy</button>

        </div>

        <div className='bg-gray-800/60 rounded-xl p-5 border border-gray-700'>
          <div className='flex text-sm gap-x-6 items-center justify-between flex-wrap gap-y-5 text-gray-200'>
            <div className='flex items-center gap-x-3'>
              <input
                type="range"
                min={6}
                max={100}
                value={length}
                className='cursor-pointer accent-purple-600 w-36'
                onChange={(e) => { setLength(e.target.value) }}
              />
              <laber className='font-medium bg-purple-600/20 text-purple-300 px-3 py-2 rounded-lg'>
                leter: {length}
              </laber>
            </div>
 
            <div className='flex items-center gap-x-2 bg-gray-700/50 px-4 py-3 rounded-lg hover:bg-gray-700 transition-all duration-300'>
              <input
                type="checkbox"
                defaultChecked={numberAllowed}
                id="numberInput"
                className='w-4 h-4 accent-purple-600 cursor-pointer'
                onChange={(e) => {
                  setCharAllowed((prev => !prev))
                }}
              />
              <laber
                htmlFor="numberInput"
                className='text-gray-200 font-medium cursor-pointer'
              >
                Numbers
              </laber>
            </div>

            <div className='flex items-center gap-x-2 bg-gray-700/50 px-4 py-3 rounded-lg hover:bg-gray-700 transition-all duration-300'>
              <input
                type="checkbox"
                defaultChecked={charAllowed}
                id="characterInput"
                className='w-4 h-4 accent-purple-600 cursor-pointer'
                onChange={() => {
                  setCharAllowed((prev => !prev))
                }}
              />
              <laber
                htmlFor="characterInput"
                className='text-gray-200 font-medium cursor-pointer'
              >
                Characters
              </laber>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default App