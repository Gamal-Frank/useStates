import { useState } from "react"

function App() {
const[numbers,setNumbers]=useState([10,20,30])
const total = numbers.reduce((acc,number)=>acc + number,0)
  return (
    <div>total : {total}</div>
  )
}

export default App
