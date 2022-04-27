import React,{useState} from 'react'

export default function Counter() {
    const [counter,setCounter] = useState(0)
  return (
    <>
    <h1>Counter</h1>
    <h1 data-testid="my-counter">{counter}</h1>
    <input placeholder='add Too'/>
    <button onClick={()=>setCounter(counter + 1)}>Add One</button>
    <button onClick={()=>setCounter(counter - 1)}>Minus One</button>
    </>
  )
}
