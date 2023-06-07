import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Todoitem from './Todoitem'
import Addtodo from './Addtodo'




function Todolist() {
const todos = useSelector(state => state.todo.todolist)
console.log(todos)
const [showdone, setshowdone] = useState(false)
  return (
    <div className='todolisst'>
        <Addtodo/>
        <button onClick={()=>setshowdone (!showdone)}>
             {showdone? 'show undone':'show done'  }
             </button>
        {todos
        .filter((todo)=>todo.isDone=== showdone)
        .map((todo)=> 
            <Todoitem todo={todo}/>
        )
        }

</div>
);
};
export default Todolist