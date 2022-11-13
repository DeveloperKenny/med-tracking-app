import React from 'react';
import {Navbar} from './Components/Navbar'
import { Atorvastatin  } from './Components/Cards.js/Atorvastatin';
import { Furosemide  } from './Components/Cards.js/Furosemide';
import { Losartan  } from './Components/Cards.js/Losartan';
import { Metoprolol  } from './Components/Cards.js/Metoprolol';
import { Rivaroxaban  } from './Components/Cards.js/Rivaroxaban';
import { Spironolactone  } from './Components/Cards.js/Spironolactone';
import './App.css';

function App() {
  return (

            <div>
              <Navbar />
                <div className="contianer morning-container">
                  <div className="card morning-card">
                  <div className="label-morning">Morning Meds</div>
                  <Atorvastatin />
                  <Furosemide />
                  <Losartan />
                  <Metoprolol />
                  <Rivaroxaban />
                  <Spironolactone />
                  </div>
                </div>
            </div>
  );
}

export default App;
