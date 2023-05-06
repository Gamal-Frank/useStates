import { useMemo, useState } from "react"

function App() {
const[numbers,setNumbers]=useState([10,20,30])
const total = useMemo(()=>numbers.reduce((acc,number)=>acc + number,0),[numbers])
function add(){
  setNumbers([...numbers,10])
} 

const[names,setNames]=useState(["hossam","frank","khaled","salah"])
const sortedNames = useMemo(()=>names.sort(),[names])
function addName(){
  setNames([...names,"a7a"])
}
  return (
   <div> <div>total : {total}</div>
   <button onClick={add}>add number</button>
   <div>{sortedNames.join(", ")}</div>
   <button onClick={addName}>add name</button>
   </div>
    
  )
}

export default App
