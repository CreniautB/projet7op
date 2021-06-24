import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import route from '../../../../service/messageCall'

const ModCom = ({ comId, userId, text, setHaveToUpdate }) => {

const [display, setDisplay] = useState(false);

  function formdisplay(submitEvent) {
      
    submitEvent.preventDefault();
    setDisplay(true)

  }      

  function modCom(submitEvent) {

    submitEvent.preventDefault();

    const msg = { content: null};

    const form = submitEvent.target;

    msg.content = form.content.value;

    const msgJson = JSON.stringify(msg)
    const com = JSON.stringify(comId) 
    const user = JSON.stringify(userId)

    // Envoie de la requete
   route.modCom(com, user, msgJson)
    .then(() => {
        setHaveToUpdate(true)
        form.content.value = ''
    })
    .then(() => setDisplay(false))
  }

  
    if (!display){
      return (
        <div>
            <button onClick={formdisplay}>
                MODIFIER
            </button>
        </div>
      );
    }
      return (
          <div>
              <form className="modComForm" onSubmit={modCom}>

                  <input type="text" id="content" defaultValue = {text} />

                  <button className="submitBtn" type="submit" >
                    <FontAwesomeIcon icon={faPaperPlane} />
                  </button>
              </form>
          </div>
    )
}

export default ModCom;