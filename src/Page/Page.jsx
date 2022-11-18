import React from "react";


import '../Page/Page.css';


export const Page = () => {



    return (
        <div className="container">

            <div className="card">
                <div className="card-body box">

                    <button type="button"
                     className="btn btn-secondary">
                        Medications
                    </button>

                    <button type="button"
                     className="btn btn-secondary">
                        History
                    </button>

                    <button type="button"
                     className="btn btn-secondary">
                        Contacts
                    </button>

                </div>
            </div>        
        </div>
    )
}