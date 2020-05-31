import React from 'react'
import NavbarDirector from '../Director/Nav/Navbar';
import TodoPageContab from './TodoPage/TodoPageContab';
import ContabGeneralPage from './GeneralPage/ContabGeneralPage';
import modules from './Contab.module.css'
import { Route } from 'react-router-dom';
import { isModifier } from 'typescript';

const Contab = () => {

    return (
        <div className={modules.app_wrapper}>

            <NavbarDirector/>


            <div className={modules.app_wrapper_content}>

            <Route exact path="/contab" render={() => <ContabGeneralPage/>} />
            <Route exact path="/contab/:workerid/todo" render={() => <TodoPageContab/>} />

                

                


            </div>


        </div>
    )

}
export default Contab;