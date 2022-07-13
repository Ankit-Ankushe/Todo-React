import React from 'react'
import './TodoList.css'

const TodoList = ({data,handleDelete,handleStatus}) => {
  return (
    <div>
      <h1>List Of Todos</h1>
      {
        data.map((e) => (
            <div className='container'>
                <h1 style={e.status? {color:"green"} : {color:"red"}}>{`${e.title} - ${e.status}`}</h1>
                <div className='btn'><button onClick={()=>handleDelete(e.id)}>Delete</button>
                <button onClick={()=>handleStatus(e.id,e.status)}>Toggle Status</button></div>
            </div>
        ))
      }
    </div>
  )
}

export default TodoList
