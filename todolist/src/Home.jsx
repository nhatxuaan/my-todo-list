import React from 'react'
import Create from './Create'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { BsCircleFill, BsTrashFill } from 'react-icons/bs'
const Home = () => {
    const [todos, setTodos]=useState([]);
    useEffect (()=>{
      axios.get('http://localhost:3001/get')
      .then(result => setTodos(result.data))
      .catch(err => console.log(err))
    },[])
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
              <div className='checkbox'>
                <BsCircleFill className='icon'/>      
              </div>
              
              <p>{todo.task}</p>

              <div>
                <span><BsTrashFill className='icon'/></span>
              </div>
                
            </div>
        ))
      }
    </div>
  )
}
//5 phut 50

export default Home
