import React from 'react'

const Navbar = ()=>{
    return(
        <div className='navbar__container'>
            <div  className='navbar__logo'>
                <img className='navbar__logo__icon'
                    src={require('./img/SVG/sendify-white-orange.svg')} 
                    alt="sendify logo"/>
            </div>
            <nav className='navbar__box'>
                <div className='navbar__sections'>    
                    <a href="#" className='navbar__link' >
                        <img className='navbar__icon'
                            src={require(`./img/SVG/bar-graph.svg`)} alt="navbar__link"/>
                        <span>Dashboard </span>
                    </a>
                    <a href="#" className='navbar__link' >
                        <img className='navbar__icon'
                            src={require(`./img/SVG/circle-with-plus.svg`)} alt="navbar__link"/>
                        <span>New Shipment</span>
                    </a>
                    <a href="#" className='navbar__link'> 
                        <img className='navbar__icon'
                            src={require(`./img/SVG/install.svg`)} alt="navbar__link"/>
                        <span>Imports</span>
                    </a>
                </div>
                
                <div className='navbar__sections'>
                    <a href="#" className='navbar__link' >
                        <img className='navbar__icon'
                            src={require(`./img/SVG/circle.svg`)} alt="navbar__link"/>
                        <span>Drafts</span>
                    </a>
                    <a href="#" className='navbar__link' >
                        <img className='navbar__icon'
                            src={require(`./img/SVG/vinyl.svg`)} alt="navbar__link"/>
                        <span>Booked</span>
                    </a>
                    <a href="#" className='navbar__link' >
                        <img className='navbar__icon'
                            src={require(`./img/SVG/stopwatch.svg`)} alt="navbar__link"/>
                        <span>Picked up</span>
                    </a>
                    <a href="#" className='navbar__link' >
                        <img className='navbar__icon'
                            src={require(`./img/SVG/check.svg`)} alt="navbar__link"/>
                        <span>Delivered</span>
                    </a>
                </div>
                
                <div className='navbar__sections'>
                    <a href="#" className='navbar__link' >
                        <img className='navbar__icon'
                            src={require(`./img/SVG/text-document.svg`)} alt="navbar__link"/>
                        <span>Cost control</span>
                    </a>
                </div>
                
                <div  className='navbar__sections'>
                    <a href="#" className='navbar__link' >
                        <img className='navbar__icon'
                            src={require(`./img/SVG/book.svg`)} alt="navbar__link"/>
                        <span>Address Book</span>
                    </a>
                    <a href="#" className='navbar__link' >
                        <img className='navbar__icon'
                            src={require(`./img/SVG/grid.svg`)} alt="navbar__link"/>
                        <span>Apps</span>
                    </a>
                    <a href="#" className='navbar__link' >
                        <img className='navbar__icon'
                            src={require(`./img/SVG/cog.svg`)} alt="navbar__link"/>
                        <span>Settings</span>
                    </a>
                </div>
                
                <div className='navbar__sections'>
                    <a href="#" className='navbar__link' >
                        <img className='navbar__icon'
                            src={require(`./img/SVG/lifebuoy.svg`)} alt="navbar__link"/>
                        <span>Helpcenter</span>
                    </a>
                    <a href="#" className='navbar__link' >
                        <img className='navbar__icon'
                            src={require(`./img/SVG/login.svg`)} alt="navbar__link"/>
                        <span>Logout</span>
                    </a>
                </div>
            </nav>
        </div>
    )
}

export default Navbar