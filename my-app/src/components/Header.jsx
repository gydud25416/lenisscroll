import React from "react";

const Header = () => {
    return (
        
            <div className="header_inner">
                
                <div className="header_nav" role="navigation" aria-label="메인 메뉴">
                    <ul>
                        <li><a href="#Intro">Intro</a></li> 
                        <li><a href="#about">About</a></li> 
                        <li><a href="#work">Work</a></li>
                        <li><a href="#contact">contact</a></li>
                    </ul>
                </div>
                <div className="header_logo">
                    <a href="/">portfolio<em>vite</em></a>
                </div>
                <div>
                    <a href="/">Blog</a>
                </div>
                <div className="header_nav_mobile" id="headerToggle" aria-controls="primary-menu" aria-expanded="false" role="button" tabIndex="0">
                    <span></span>
                </div>
            </div>
       
    )
}

export default Header; 