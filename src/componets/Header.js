import React from "react"
import Typed from "react-typed";

function Header(props) {
    return (
        <div className= "header-wrapper">
            <div className="main-info">
                <h1>Welcome To My portfolio</h1>
            <Typed
            className="typed-text"
            strings={["Web Design", "Web Devleopment", "Being a really cool dude"]}
            typeSpeed={40}
            backSpeed ={60}
            loop
            />
            
            </div>
        </div>
    )
}

export default Header;