import React, { useEffect, useState  } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'
import route from '../../../service/messageCall'
import DelCom from './delCom/delCom'
import ModCom from './modCom/modCom'
import './paramCom.css'

const ParamCom = ({id, user, text, setHaveToUpdate, item}) => {
    
    const [ display, setDisplay] = useState(false)

    function displayed (submitEvent) {    
        submitEvent.preventDefault();
        setDisplay(true)
    }

    function unDisplayed(submitEvent) {
        submitEvent.preventDefault();
        setDisplay(false)
    }

    if (Number(localStorage.userId) === Number(user) || localStorage.userRole === "admin") {

        if (!display){
            return (
                <div className="iconCom">
                    <FontAwesomeIcon className="iconCom" icon ={faEllipsisV} onClick={displayed}/>
                </div>
            )
        }
            return (
                <div className="paramComContainer" >
                    <div className="iconCom">
                        <FontAwesomeIcon className="iconCom" icon ={faEllipsisV} onClick={unDisplayed}/>
                    </div>
                    <div className="paramComOption" >
                            <DelCom id ={id} user={user}  setHaveToUpdate={setHaveToUpdate} route={route}/>
                            <ModCom id={id} user={user} text={text}  setHaveToUpdate={setHaveToUpdate} route={route}/>
                    </div>
                </div>
            )
        
        }

        return (
            <div></div>
        )
}

export default ParamCom