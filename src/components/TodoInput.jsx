import React from 'react'
import { useState } from 'react'

const TodoInput = ({handleAdd}) => {
    const [input,setInput] = useState("")
  return (
    <div>
        <h1>Add Todos</h1>
      <input type="text" placeholder='Title' value={input} onChange={(e) =>{setInput(e.target.value)}}/>
      <button onClick={()=>handleAdd(input)}>Add</button>
    </div>
  )
}

export default TodoInput
