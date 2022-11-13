import React, {useState, useEffect } from "react";

import { collection, addDoc, serverTimestamp }  from "firebase/firestore";
import { db } from "./Connection";

import checkbox from "./check-square.svg"
import square from "./square.svg"




export const Spironolactone = () => {

 
    let [taken, setTaken] = useState(false)

      
    useEffect( () => {

        addDoc(collection(db, "morning-meds"), {
            name_drug: 'spironolactone',
            taken: taken,
            taken_on: serverTimestamp()
        })
    }, [taken])
        
  
    return (
        <div className="container">
            <div className="card card-list">
                <div className="card-body">
                    <label> Spironolactone 25mg
                    {taken === false ?
                            <img className="complete-box" src={square} onClick={()=>setTaken(true)} alt="uncomplete" /> :
                            <img className="complete-box" src={checkbox} alt="completed" onClick={ () => setTaken(false)} />
                    }
                    </label>
                   
                </div>
            </div>

        </div>
)
}