import { useCallback, useEffect, useRef } from "react";
import { useState } from "react";

function App() {
  const [length, setlength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharallowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*-+=?><";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass)

  }, [numAllowed, charAllowed, length, setPassword]);

  const copyToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator()
  }, [length, numAllowed, charAllowed, passwordGenerator]);

  return (
    <div className="w-full h-screen bg-slate-800 text-white p-5 flex flex-col items-center">
      <div className="w-1/3 p-5 rounded-xl bg-gray-600">
        <h1 className="text-4xl text-center">Password Generator</h1>
        <div className="flex items-center">
          <input
            type="text"
            value={password}
            placeholder="password"
            readOnly
            ref={passwordRef}
            className="w-96 rounded-l-md px-4 py-2 my-5 outline-none text-black font-sans text-lg"
          />
          <button
            onClick={copyToClipboard}
            className="bg-blue-600 px-4 py-2 rounded-r-md font-sans text-lg ">
            copy
          </button>
        </div>
        <div className="flex gap-2">
          <input
            type="range"
            min={8}
            max={30}
            value={length}
            onChange={(e) => {
              setlength(e.target.value);
            }}
          />
          <label htmlFor="Length">Length:{length}</label>
          <input type="checkbox" defaultChecked={numAllowed} onChange={()=>{setNumAllowed((prev) => !prev)}} id="number" className="cursor-pointer" />
          <label htmlFor="number" className="cursor-pointer">
            Numbers
          </label>
          <input type="checkbox" defaultChecked={charAllowed} onChange={()=>{setCharallowed((prev) => !prev)}} id="character" className="cursor-pointer" />
          <label htmlFor="character" className="cursor-pointer">
            Special Characters
          </label>
        </div>
      </div>
    </div>
  );
}

export default App;
