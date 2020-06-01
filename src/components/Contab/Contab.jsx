import React from 'react'
import NavbarDirector from '../Director/Nav/Navbar';
import TodoPageContab from './TodoPage/TodoPageContab';
import ContabGeneralPage from './GeneralPage/ContabGeneralPage';
import modules from './Contab.module.css'
import { Route } from 'react-router-dom';
import ContabTodoApartContainer from './TodoPage/Content/TodoApart/ContabTodoApartContainer';

const Contab = () => {

    return (
        <div className={modules.app_wrapper}>

            <NavbarDirector/>


            <div className={modules.app_wrapper_content}>

            <Route exact path="/contab" render={() => <ContabGeneralPage/>} />
            <Route exact path="/contab/:workerid/todo" render={() => <TodoPageContab/>} />
            <Route exact path="/contab/:workerid/todo/:todoid" render={() => <ContabTodoApartContainer/>} />

                

                


            </div>


        </div>
    )

}
export default Contab;