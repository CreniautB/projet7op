import React, { useEffect, useState  } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'
import DelCom from '../delCom/delCom.jsx'
import ModCom from '../modCom/modCom.jsx'
import './paramCom.css'

const ParamCom = ({id, user, text, setHaveToUpdate}) => {
    
    const [ display, setDisplay] = useState(false)

    function displayed (submitEvent) {    
        submitEvent.preventDefault();
        setDisplay(true)
    }

    if (localStorage.userId == user) {

    if (!display){
        return (
            <div className="iconCom">
                <FontAwesomeIcon className="button" icon ={faEllipsisV} onClick={displayed}/>
            </div>
        )
    }

    else {
        return (
            <div className="paramComOption" >
                    <DelCom id ={id} user={user}  setHaveToUpdate={setHaveToUpdate}/>
                    <ModCom id={id} user={user} text={text}  setHaveToUpdate={setHaveToUpdate} />

            </div>
        )
    }
    }
    else 
    {
        return (
            <div></div>
        )
    }
}

export default ParamCom