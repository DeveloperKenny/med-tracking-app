import React from "react";
import Count from '../Component/Count';
import '../Title/Title.css';
import heart from '../Title/heart-attack.png';


const Title = (props) => {

    return (
        <div className="container">
            <div className="heart-title">
            <img className="heart-icon" src={heart} alt="heart" />
                Heart <span>Medications</span><div className="btn btn-warning">{props.count} / 6</div>
                
            </div>
        </div>
    )
}
export default Title;
