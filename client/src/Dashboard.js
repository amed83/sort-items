import React from 'react'
import axios from 'axios'

const Dashboard = (props)=>{

    return(
        <div className="items-list">
            {props.items}
        </div>
    )
}

export default Dashboard