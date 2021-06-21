import React from "react";
import route from "../../../service/userCall"

const accHandle = ({setDisconnect}) => {

    function delAcc () {    
        route.delAcc()
        localStorage.clear()
        setDisconnect(true)
    };

    function disc () {
        localStorage.clear()
        setDisconnect(true);
    };


    return (
        <div className="accHandle">
            <button onClick={delAcc} >
                Suprimer son compte
            </button>

            <button onClick={disc} >
                Se Déconnecter
            </button>
        </div>
    )
}


export default accHandle;