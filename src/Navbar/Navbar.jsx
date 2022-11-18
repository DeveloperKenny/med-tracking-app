import React from "react";
import '../Navbar/Navbar.css';
import  ken  from '../Navbar/Kennedy.png'
import user from '../Navbar/user.png'

export const Navbar = ()=> {
    let d = new Date();
    let mm = d.getMonth();
    mm = mm + 1;
    let todayDate = d.getDate();
    let yy = d.getFullYear();

    console.log(todayDate)

    return(
        <div>
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand">
                    <img src={user} 
                        alt="" width="30" height="30" className="d-inline-block align-text-top" />
                        
                        <span className="curentTime">
                        {
                            mm + " / " + todayDate + " / " + yy
                        }
                        </span>
                    </a>
                </div>
            </nav>

        </div>
    )
}