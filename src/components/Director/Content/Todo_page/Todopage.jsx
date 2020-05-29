import React from 'react'
import modules from './Todopage.module.css'
import GeneralContent from './content/GeneralContent/general_content'
import SideBarTopContent from './content/SidebarTop/sidebar_top_content'
import Bside from './content/SidebarBottom/sidebar_bottom_content'
import TodoGeneralContentContainer from './content/GeneralContent/TodoGeneralContentContainer'
import SidebarTopContainer from './content/SidebarTop/SidebarTopContainer'


const Todopage =()=> {
    return(
        <div className={modules.gridcontainer}>
           <div className={modules.gencont}> <TodoGeneralContentContainer/></div>
           <div className={modules.stcont}><SidebarTopContainer/></div>
           <div className={modules.sbcont}><Bside/></div>

        </div>
    )
}

export default Todopage;