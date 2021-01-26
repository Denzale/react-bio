import React from "react"
import Typed from "react-typed";

function Header() {
    return ( 
            <div className="main-info">
                <h1>Welcome To My portfolio</h1>
            <Typed
            className="typed-text"
            strings={["Web Design", "Web Devleopment", "Ui Design"]}
            typeSpeed={40}
            backSpeed ={60}
            loop
            />
            
            </div>
    )
}

export default Header;