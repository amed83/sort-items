import React from 'react'

const Dashboard = (props)=>{
    return(
        <div className="items-list">
            {props.items}
        </div>
    )
}

export default Dashboard