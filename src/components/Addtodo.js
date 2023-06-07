import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addtask } from '../redux/todoSlice/TodoSlice';

function Addtodo() {

    const dispatch = useDispatch();
const [task, settask] = useState({
    id: Math.random(),
    title:"",
    description:"",
    isDone: false,
})


  return (
    <div className='addtask'>
        <input type='text' placeholder='enter task title' onChange={(e)=>
            {settask({...task,title : e.target.value})
            }}/>
        <input type='text' placeholder='enter task description'
        onChange={(e)=>
            {settask({...task,description: e.target.value})
            }}/>
        <button onClick={()=>dispatch(addtask(task))}
        >Add new task</button>
    </div>
  )
}

export default Addtodo