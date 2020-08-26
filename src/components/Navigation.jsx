import React from "react";
import logo from "../img/logo.png";

export default function Navigation(){
    return(
        <nav>
            <div className="left">
                <img alt="logo" src={logo}/>
            </div>
            <div className="right">
                <a href="#">Help</a>
            </div> 
        </nav>
    )
}
