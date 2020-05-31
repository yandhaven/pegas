import React from 'react'
import TodoContabTable from './Content/TodoTable/TodoContabTable';
import modules from './TodoPageContab.module.css'
import TodoContabTableContainer from './Content/TodoTable/TodoContabTableContainer';

const TodoPageContab =()=>{
    return (
        
        <div className={modules.gencontainer}><TodoContabTableContainer/></div>
    )
}

export default TodoPageContab;
