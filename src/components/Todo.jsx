import React from 'react'
import { useState } from 'react'
import TodoInput from './TodoInput'
import TodoList from './TodoList'
import {v4 as uuid} from 'uuid'
import { useEffect } from 'react'
 
const Todo = () => {
    const [data,setData] = useState([])

    useEffect(() => {
        handleFetch()
    },[])


    const handleFetch = () => {
        fetch(`http://localhost:8080/todo`)
        .then((res) => res.json())
        .then((res) => setData(res))
        .catch((err) => console.log(err))
    }

    // Adding the data in the database
    const handleAdd = (title) =>{
        const data = {
            id:uuid(),
            title:title,
            status:false
        }
        fetch(` http://localhost:8080/todo`,{
            method:'POST',
            body:JSON.stringify(data),
            headers:{
                'content-Type' : 'application/json'
            }
        }).then((res) =>res.json())
        .then((res) => handleFetch())
        .catch((err) => console.log(err))
    }


    // deleting the data from the data base
    const handleDelete = (id) =>{
        fetch(`http://localhost:8080/todo/${id}`,{
            method:'DELETE'
        }).then((res) =>res.json())
        .then((res) => handleFetch())
        .catch((err) => console.log(err))
    }


    // updating the data from the data base
    const handleStatus = (id,status) =>{
        const patchingData = {
            "status":!status
        }
        fetch(`http://localhost:8080/todo/${id}`,{
            method:'PATCH',
            body:JSON.stringify(patchingData),
            headers:{
                'content-Type' : 'application/json'
            }
        }).then((res) =>res.json())
        .then((res) => handleFetch())
        .catch((err) => console.log(err))
    }
  return (
    <div>
      <TodoInput handleAdd = {handleAdd} />
      <TodoList data={data} handleDelete={handleDelete} handleStatus={handleStatus}  />
    </div>
  )
}

export default Todo
