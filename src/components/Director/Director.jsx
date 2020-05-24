import React from 'react'
import modules from './Director.module.css'
import NavbarDirector from './Nav/Navbar';
import General from './Content/General_page/General';
import { Route } from 'react-router-dom';
import Todopage from './Content/Todo_page/Todopage';



const Director = () => {

    return (
        <div className={modules.app_wrapper}>

            <NavbarDirector/>


            <div className={modules.app_wrapper_content}>

            <Route path="/director/general" render={() => <General/>} />
            <Route path="/director/todo" render={() => <Todopage/>} />

                

                


            </div>


        </div>
    )

}
export default Director;