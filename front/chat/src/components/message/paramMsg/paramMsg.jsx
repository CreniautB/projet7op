import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { faMinusCircle } from "@fortawesome/free-solid-svg-icons";
import route from '../../../service/messageCall'
import DelMsg from "./delMsg/delMsg";
import ModMsg from "./modMsg/modMsg";
import CreateCom from "./createCom/createCom";
import './paramMsg.css';

const ParamMsg = ({idMsg, userId, text, setHaveToUpdate}) => {
    
    const [ display, setDisplay] = useState(false)

    function displayed (submitEvent) {    
        submitEvent.preventDefault();
        setDisplay(true)
    }

    function unDisplayed(submitEvent) {
        submitEvent.preventDefault();
        setDisplay(false)
    }


    if (!display){
        return (
            <div className="iconCom">
                <FontAwesomeIcon className="iconCom" icon={faPlusCircle} onClick={displayed}/>
            </div>
            )
        }
        if (Number(localStorage.userId) === Number(userId) || localStorage.userRole === "admin") {
            console.log("aa")
            return (
                <div className="paramMsgContainer" >
                    <div className="iconCom">
                        <FontAwesomeIcon className="iconCom" icon ={faMinusCircle} onClick={unDisplayed}/>
                    </div>
                    <div className="paramMsgOption" >
                            <DelMsg idMsg={idMsg} userId={userId}  setHaveToUpdate={setHaveToUpdate} route={route}/>
                            <ModMsg idMsg={idMsg} userId={userId} text={text}  setHaveToUpdate={setHaveToUpdate} route={route}/>
                            <CreateCom idMsg = {idMsg}  setHaveToUpdate={setHaveToUpdate} />
                    </div>
                </div>
            )
        
        }
        
        return (
            <div className="paramMsgContainer" >
                <div className="iconCom">
                    <FontAwesomeIcon className="iconCom" icon ={faMinusCircle} onClick={unDisplayed}/>
                </div>
                <div className="paramMsgOption" >
                        <CreateCom idMsg = {idMsg}  setHaveToUpdate={setHaveToUpdate} />
                </div>
             </div>
        )
}

export default ParamMsg