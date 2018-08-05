import React from 'react'

const Navbar = ()=>{
    return(
        <div className='navbar__container'>
            <nav className='navbar__box'>
                <div className='navbar__section'>    
                    <a href="#" className='navbar__link' >
                        <img className='navbar__icon'
                        src={require(`./img/SVG/bar-graph.svg`)} alt=""/>
                        <span>Dashboard </span>
                    </a>
                    <a href="#" className='navbar__link' >
                        <img className='navbar__icon'
                        src={require(`./img/SVG/circle-with-plus.svg`)} alt=""/>
                        <span>New Shipment</span>
                    </a>
                    <a href="#" className='navbar__link'> Imports </a>
                </div>
                
                <div className='navbar__section'>
                    <a href="#" className='navbar__link' >
                        <img className='navbar__icon'
                        src={require(`./img/SVG/circle.svg`)} alt=""/>
                        <span>Drafts</span>
                    </a>
                    <a href="#" className='navbar__link' >
                        <img className='navbar__icon'
                        src={require(`./img/SVG/circle.svg`)} alt=""/>
                        <span>Booked</span>
                    </a>
                    <a href="#" className='navbar__link' >
                        <img className='navbar__icon'
                        src={require(`./img/SVG/stopwatch.svg`)} alt=""/>
                        <span>Picked up</span>
                    </a>
                    <a href="#" className='navbar__link' >
                        <img className='navbar__icon'
                        src={require(`./img/SVG/check.svg`)} alt=""/>
                    <span>Delivered</span>
                    </a>
                </div>
            
                <div className='navbar__section'>
                    <a href="#" className='navbar__link' >
                        <img className='navbar__icon'
                        src={require(`./img/SVG/text-document.svg`)} alt=""/>
                        <span>Cost control</span>
                    </a>
                </div>
                
                <div  className='navbar__section'>
                    <a href="#" className='navbar__link' >
                        <img className='navbar__icon'
                        src={require(`./img/SVG/book.svg`)} alt=""/>
                        <span>Address Book</span>
                    </a>
                    <a href="#" className='navbar__link' >
                        <img className='navbar__icon'
                        src={require(`./img/SVG/grid.svg`)} alt=""/>
                        <span>Apps</span>
                    </a>
                    <a href="#" className='navbar__link' >
                        <img className='navbar__icon'
                        src={require(`./img/SVG/cog.svg`)} alt=""/>
                        <span>Settings</span>
                    </a>
                </div>
                
                <div className='navbar__section'>
                    <a href="#" className='navbar__link' >
                        <img className='navbar__icon'
                        src={require(`./img/SVG/lifebuoy.svg`)} alt=""/>
                        <span>Helpcenter</span>
                    </a>
                    <a href="#" className='navbar__link' >
                        <img className='navbar__icon'
                        src={require(`./img/SVG/login.svg`)} alt=""/>
                        <span>Logout</span>
                    </a>
            
                </div>
            
            </nav>
        
        </div>
    )
}

export default Navbar