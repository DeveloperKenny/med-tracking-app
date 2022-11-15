import React from "react";
import { collection, addDoc, serverTimestamp }  from "firebase/firestore";
import { db } from '../Fire/Connection';

import heart from '../Components/heart-attack.png';

import './Formstyle.css';




export const Form = () => {

   

  const recordMeds = (e) => {

    addDoc(collection(db, "morning-meds"), {
        name_drug: e.target.value,
        taken_on: serverTimestamp()
    })

  }

    return(
        <div>
            <div>
                
                <div className="card">
                <div className="heart-title"><img src={heart} className="heart-icon" />Heart Meds</div>
                    <div className="card card-list">
                    <div className="card-body">
                    <label>Atorvastatin 80mg
                        <input type="checkbox" className="form-check-input ator" 
                        value="atorvastatin"
                        onClick={recordMeds}
                        />
                    </label>
                    </div>
                    </div>


                    <div className="card card-list">
                    <div className="card-body">
                    <label>Furosemide 20mg
                        <input type="checkbox" className="form-check-input ator" 
                        value="Furosemide"
                        onClick={recordMeds}
                        />
                    </label>
                    </div>
                    </div>

                    <div className="card card-list">
                    <div className="card-body">
                    <label>Losartan 50mg
                        <input type="checkbox" className="form-check-input ator" 
                        value="losartan"
                        onClick={recordMeds}
                        />
                    </label>
                    </div>
                    </div>

                    <div className="card card-list">
                    <div className="card-body">
                    <label>Metoprolol 50mg
                        <input type="checkbox" className="form-check-input ator" 
                        value="metoprolol"
                        onClick={recordMeds}
                        />
                    </label>
                    </div>
                    </div>

                    <div className="card card-list">
                    <div className="card-body">
                    <label>Rivaroxaban 20mg
                        <input type="checkbox" className="form-check-input ator" 
                        value="rivaroxaban"
                        onClick={recordMeds}
                        />
                    </label>
                    </div>
                    </div>

                    <div className="card card-list">
                    <div className="card-body">
                    <label>Spironolactone 25mg
                        <input type="checkbox" className="form-check-input ator" 
                        value="spironolactone"
                        onClick={recordMeds}
                        />
                    </label>
                    </div>
                    </div>

                    
                </div>
            </div>
        </div>
    )
}