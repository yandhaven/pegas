import React from 'react'
import modules from './General.module.css'
import MiddleChart from './middle_content/MiddleChart'
import MiddleRSide from './middle_content/MIddleRSide'
import BottomTable from './bottom_content/BottomTable'
import FuelCard from './top_content/cards/as24_card/FuelCard'
import InvoiceCard from './top_content/cards/invoicecard/InvoiceCard'
import TwCard from './top_content/cards/twcard/TwCard'
import KmCard from './top_content/cards/kmcard/KmCard'
// import as24logo from './images/as24logo.png'

const General = () => {
    return (

        <div className={modules.gridcontainer}>

            <div className={modules.top_c}> <FuelCard /> <TwCard /> <InvoiceCard /><KmCard /></div>
            <div className={modules.middle_c}> <MiddleChart /> </div>
            <div className={modules.middle_s_c}> <MiddleRSide /></div>

            <div className={modules.bot_c}> <BottomTable /> </div>


        </div>



    )
}

export default General;