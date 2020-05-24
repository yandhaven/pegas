import React from 'react'
import modules from './Todopage.module.css'
import GeneralContent from './content/general_content'
import SideBarTopContent from './content/sidebar_top_content'
import Bside from './content/sidebar_bottom_content'

const Todopage =()=> {
    return(
        <div className={modules.gridcontainer}>
           <div className={modules.gencont}> <GeneralContent/></div>
           <div className={modules.stcont}><SideBarTopContent/></div>
           <div className={modules.sbcont}><Bside/></div>

        </div>
    )
}

export default Todopage;