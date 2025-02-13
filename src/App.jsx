import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'
// useState: A hook to manage state variables in the component.
// useEffect: A hook to perform side-effects like fetching data, or in this case, updating the password when any of the conditions change.
// useRef: A hook to reference DOM elements directly, like the password input field.
// useCallback: A hook to memoize functions so that they don't get recreated unnecessarily on each render.
function App() {
  var passref = useRef(null);
  const [length, setLength] = useState(8)
  const [noallowed, setNoallowed] = useState(false)
  const [charallowed, setCharallowed] = useState(false)
  const [password, setPassword] = useState("")

  const passwordgenerator = useCallback(() => {
    var pass = ""
    var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (noallowed) str += "0123456789"
    if (charallowed) str += "@!#$%^&*()_+=?|~`.,<>';:"
    for (var i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass)


  }, [length, noallowed, charallowed, setPassword])

  useEffect(() => {
    passwordgenerator()
  }, [length, noallowed, charallowed])

  const copying = useCallback(() => {
    passref.current?.select()
    window.navigator.clipboard.writeText(password)
  }, [password])
  return (
    <>
      <h1 className='text-5xl text-center text-white'>Generate Password</h1>
      <div className='w-full bg-gray-800 max-w-md mx-auto shadow-md rounded-xl px-4 my-8 text-blue-700' >
        <div className='flex shadow  rounded-xl overflow-hidden mb-4' >
          <input type='text' ref={passref} value={password} placeholder='your password' className='outline-none w-full py-2 px-4 my-6' readOnly></input>
          <button className='w- my-5 outline-none text-white px-14 py-1 shrink-0 bg-cyan-800' onClick={copying}> COPY</button>
        </div>

        <div className='text-white gap-x-2  text-sm flex'>
          <div className='  flex items-center gap-x-1 ' >
            <input type='range' min={8} max={100} className='cursor-pointer' value={length} onChange={(e) => setLength(e.target.value)}  ></input><label>Length : {length}</label></div>

          <div>
            <input type='checkbox' value={noallowed} defaultChecked={noallowed} onChange={() => { setNoallowed((prev) => !prev) }}  ></input><label>Numbers</label></div>
          <div className='   ' >
            <input type='checkbox' value={charallowed} onChange={() => { setCharallowed((prev) => !prev) }} ></input><label>Characters {console.log(charallowed)}{charallowed}</label></div>
        </div>

      </div>




    </>
  )
}

export default App
