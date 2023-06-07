import React from 'react'
import { useDispatch } from 'react-redux'
import { deletetask, donetask } from '../redux/todoSlice/TodoSlice';
import Edittask from './Edittask';

function Todoitem({todo  } ) {
   const dispatch = useDispatch();
  return (
    <div className={`todoitem  ${todo.isDone?  "done":"undone"}`}>
       <div className='text'>
       <h1> {todo.title} </h1>
        <p>{todo.description} </p>
       </div>

       
        <spam onClick={()=>dispatch(donetask({id:todo.id}))}> 
        {todo.isDone? "Done":"Not Done"}
         </spam>
        <Edittask id = {todo.id }/>
        <button onClick={()=>dispatch(deletetask({id:todo.id}))}>Delete</button>
    </div>
  )
}

export default Todoitem