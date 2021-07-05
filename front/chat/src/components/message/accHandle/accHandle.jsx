import React, { useState } from "react";
import route from "../../../service/userCall"
import  "./accHandle.css";

const AccHandle = ({setDisconnect}) => {

    const [ isSure, setSure] = useState(false)

    function yesForm () {
        route.delAcc()
        localStorage.clear()
        setDisconnect(true)
    }
    
    function nonForm () {
        setSure(false)
    }

    function delAcc () {    
        setSure(true)
    };

    function disc () {
        localStorage.clear()
        setDisconnect(true);
    };

    if (isSure){
        return (
            <div className="formSure">
                <h1>Etes vous sure de suprimer le compte ?</h1>
                <button onClick={yesForm} className="button">
                    Oui
                </button>
                <button onClick={nonForm} className="button">
                    Non
                </button>
            </div>
        )
    }

    return (
        <div className="accHandle">
            <button className="button" onClick={delAcc} >
                Suprimer son compte
            </button>

            <button className="button" onClick={disc} >
                Se Déconnecter
            </button>
        </div>
    )
}


export default AccHandle;