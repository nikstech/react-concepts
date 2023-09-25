import { useState, useEffect, useCallback, useRef } from "react";

function PasswordGenerator() {
  const [length, setLength] = useState('8')
  const [numAllow, setNumAllow] = useState(false)
  const [charAllow, setCharAllow] = useState(false)
  const [password, setPassword] = useState('jh8#gj')

  const passwordGenerate = useCallback(() => {
    let pass = ''
    let char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    let num = '0123456789'
    let specialChar = '!@#$%^&*()_+="-"~`/?>.<,'

    if (numAllow) { char += num }
    if (charAllow) { char += specialChar }

    for (let i = 0; i <= length; i++) {
      let charIndex = Math.floor(Math.random() * char.length + 1)
      pass += char.charAt(charIndex)
    }
    setPassword(pass)
  }, [length, numAllow, charAllow])

  const passRef = useRef()

  const handleLength = (e) => {
    setLength(e.target.value)
  }
  // const handleNum = (e) => {
  //   setNumAllow(e.target.value)
  // }
  // const handleChar = (e) => {
  //   setCharAllow(e.target.value)
  // }
  const handleCopyToClipboard = () => {
    window.navigator.clipboard.writeText(password)
    passRef.current.select()
  }
  useEffect(() => {
    passwordGenerate()
  }, [length, numAllow, charAllow])

  return (
    <div className="App">
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h1 className='text-white text-center my-3'>Password generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            ref={passRef}
            readOnly
          />
          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0' onClick={handleCopyToClipboard}>copy</button>

        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
              type="range"
              min={6}
              max={30}
              value={length}
              className='cursor-pointer'
              onChange={handleLength}
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked=''
              onChange={()=>setNumAllow((prev)=>!prev)}
              id="numberInput" />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked=''
              onChange={()=>setCharAllow((prev)=>!prev)}
              id="characterInput" />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PasswordGenerator;