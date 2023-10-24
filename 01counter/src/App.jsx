import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter] = useState(15)
  const addvalue = ()=>{
    // console.log("value added", counter);
   setCounter(counter+1);
  }
  const decValue = ()=>{
    if(counter>0){
    setCounter(counter-1);
    }
  }
  return (
    <>
     <h1>chai with code</h1>
     <h3>counter:{counter}</h3>
     <button onClick={addvalue}>Increse</button>
     <button onClick={decValue}>Decrese</button>
    </>
  )
}

export default App
