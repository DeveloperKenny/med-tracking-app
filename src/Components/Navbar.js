import React from "react";

import userpic from '../Components/maleuser.png'






export const Navbar = () => {


    return(
            <div className="container">
              
                <div className="user-name"><img className="user-pic" src={userpic} /> Kennedy Lee</div>
            </div>
    )
}