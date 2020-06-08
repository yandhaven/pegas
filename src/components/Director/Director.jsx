import React from 'react'
import modules from './Director.module.css'
import NavbarDirector from './Nav/Navbar';
import General from './Content/General_page/General';
import { Route } from 'react-router-dom';
import Todopage from './Content/Todo_page/Todopage';
import DirectorTodoApartContainer from './Content/Todo_page/content/DirectTodoApart/DirectorTodoApartContainer';



const Director = () => {

    return (
        <div className={modules.app_wrapper}>

            <NavbarDirector/>


            <div className={modules.app_wrapper_content}>

            <Route path="/director/general" render={() => <General/>} />
            <Route exact path="/director/:workerid/todo" render={() => <Todopage/>} />
            <Route exact path="/director/:workerid/todo/:todoid" render={() => <DirectorTodoApartContainer/>} />

                

                


            </div>


        </div>
    )

}
export default Director;