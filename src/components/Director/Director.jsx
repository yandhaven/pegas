import React from 'react'
import modules from './Director.module.css'
import NavbarDirector from './Nav/Navbar';
import General from './Content/General_page/General';



const Director = () => {

    return (
        <div className={modules.app_wrapper}>

            <NavbarDirector/>


            <div className={modules.app_wrapper_content}>

                <General/>

                


            </div>


        </div>
    )

}
export default Director;