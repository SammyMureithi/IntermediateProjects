import React from "react"

export default function Navbar(props) {

    return (
     
         <nav 
            className={props.darkMode ? "dark": ""}
        >
            <img 
                className="nav--logo_icon"
                src="./images/img.png"
            />
            <h3 className="nav--logo_text">ReactFacts</h3>
            
           <button onClick={props.handleClick}>Change theme</button>
        </nav>
    )
}