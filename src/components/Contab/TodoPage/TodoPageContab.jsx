import React from 'react'
import TodoContabTable from './Content/TodoTable/TodoContabTable';
import modules from './TodoPageContab.module.css'

const TodoPageContab =()=>{
    return (
        
        <div className={modules.gencontainer}><TodoContabTable/></div>
    )
}

export default TodoPageContab;
