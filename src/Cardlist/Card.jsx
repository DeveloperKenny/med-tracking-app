import React, { useState } from "react";
import '../Cardlist/Card.css';
import { db } from '../Fire/Fire';
import { collection, addDoc, serverTimestamp }  from "firebase/firestore";
import Title from '../Title/Title.jsx';

export const Card = () => {

  let [count, setCount] = useState(0)
  const addInput = document.querySelector('.add');

  console.log("addInput", addInput);

    const addMed = (e) => {

        
    addDoc(collection(db, "morning-meds"), {
        name_drug: e.target.value,
        taken_on: serverTimestamp()
    })

      setCount(count => count + 1);
   
    }

    const resetForm = () => {

      addInput.reset()
    }

    

    return(
      <div>
        <Title count={count} />
        <form className="container add">
         <div className="card">
          <div className="card-body">

          <div className="card">
            <div className="card-body">
            <label className="form-check-label">
             Atorvastatin 80mg<input className="form-check-input ator"
             type="checkbox"
              value="atorvastatin 80mg" onClick={addMed}/>
            </label>
            </div>
            </div>

            <div className="card">
            <div className="card-body">
            <label className="form-check-label">
             Furosemide 20mg<input className="form-check-input ator"
             type="checkbox"
              value="furosemide 20mg" onClick={addMed} />
            </label>
            </div>
            </div>

            <div className="card">
            <div className="card-body">
            <label className="form-check-label">
             Losartan 50mg<input className="form-check-input ator"
             type="checkbox"
              value="losartan 50mg" onClick={addMed} />
            </label>
            </div>
            </div>

            <div className="card">
            <div className="card-body">
            <label className="form-check-label">
             Metoprolol 50mg<input className="form-check-input ator"
             type="checkbox"
              value="metoprolol 50mg" onClick={addMed}/>
            </label>
            </div>
            </div>

            <div className="card">
            <div className="card-body">
            <label className="form-check-label">
             Rivaroxaban 20mg<input className="form-check-input ator"
             type="checkbox"
              value="Rivaroxban 20mg" onClick={addMed}/>
            </label>
            </div>
            </div>

            <div className="card">
            <div className="card-body">
            <label className="form-check-label">
             Spironolactone 25mg<input className="form-check-input ator"
             type="checkbox"
              value="Spironolactone 25mg" onClick={addMed}/>
            </label>
            </div>
          </div>
          </div>
          
         </div>
        
        <button type="button" className="btn btn-primary reset-btn"
         onClick={resetForm}>Reset</button>
        </form>
        </div>

      
    )
}

