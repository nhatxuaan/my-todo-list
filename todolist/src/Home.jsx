import React from 'react'
import Create from './Create'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { BsCircleFill, BsFillCheckCircleFill, BsTrashFill } from 'react-icons/bs'
const Home = () => {
    const [todos, setTodos]=useState([]);
    useEffect (()=>{
      axios.get('http://localhost:3001/get')
      .then(result => setTodos(result.data))
      .catch(err => console.log(err))
    },[])

const handleEdit = (id) => {
  axios.put('http://localhost:3001/update/'+id)
      // .then(result => console.log(result))
      .then(result=>{
        location.reload(result)
      })
      .catch(err => console.log(err))
}

  return (
    <div className='home'>
      <h2>Todo List</h2>
      <Create/>
      {
        todos.length === 0?
        <div><h2>No record</h2></div>
        :
        todos.map(todo=>(
            <div className='task'>
              <div className='checkbox' onClick={() => handleEdit(todo._id)}>
                {todo.done ?
                <BsFillCheckCircleFill className='iconChecked'/>
                :
                <BsCircleFill className='iconUnchecked'/>   
                }    
              </div>

              <p className={todo.done? "line_through":""}>{todo.task}</p>

              <div>
                <span><BsTrashFill className='iconTrash'/></span>
              </div>
                
            </div>
        ))
      }
    </div>
  )
}
//5 phut 50

export default Home
