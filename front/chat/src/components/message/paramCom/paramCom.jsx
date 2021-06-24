import React, { useState  } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { faMinusCircle } from "@fortawesome/free-solid-svg-icons";
import DelCom from './delCom/delCom'
import ModCom from './modCom/modCom'
import './paramCom.css'

const ParamCom = ({comId, userId, text, setHaveToUpdate}) => {
    
    const [ display, setDisplay] = useState(false)

    function displayed (submitEvent) {    
        submitEvent.preventDefault();
        setDisplay(true)
    }

    function unDisplayed(submitEvent) {
        submitEvent.preventDefault();
        setDisplay(false)
    }

    if (Number(localStorage.userId) === Number(userId) || localStorage.userRole === "admin") {

        if (!display){
            return (
                <div className='paramComContainer'>
                    <div className="iconCom">
                        <FontAwesomeIcon className="iconCom" icon ={faPlusCircle} onClick={displayed}/>
                    </div>
                </div>
            )
        }
            return (
                <div className="paramComContainer" >
                    <div className="iconCom">
                        <FontAwesomeIcon className="iconCom" icon ={faMinusCircle} onClick={unDisplayed}/>
                    </div>
                    <div className="paramComOption" >
                            <DelCom comId ={comId} userId={userId}  setHaveToUpdate={setHaveToUpdate}/>
                            <ModCom comId={comId} userId={userId} text={text}  setHaveToUpdate={setHaveToUpdate}/>
                    </div>
                </div>
            )
        
        }

        return (
            <div></div>
        )
}

export default ParamCom