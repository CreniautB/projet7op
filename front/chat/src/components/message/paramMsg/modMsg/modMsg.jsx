import React, { useState } from "react"
import routes from '../../../../service/messageCall'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

const ModMsg = ({ idMsg, userId, text, setHaveToUpdate }) => {

const [display, setDisplay] = useState(false);

  function formdisplay(submitEvent) {      
    submitEvent.preventDefault();
    setDisplay(true)
  }      

  function modMsg(submitEvent) {

    submitEvent.preventDefault();

    const msg = { content: null};

    const form = submitEvent.target;

    msg.content = form.content.value;

    const msgJson = JSON.stringify(msg)
    const msgId = JSON.stringify(idMsg) 
    const user = JSON.stringify(userId)

    // Envoie de la requete
    routes.modMsg(msgId, user, msgJson)
    .then(() => {
        setHaveToUpdate(true)
    })
    .then(() => setDisplay(false))
    }
   
    if (!display){
      return (
        <div>
            <button className="button" onClick={formdisplay}>
                Modifier
            </button>
        </div>
      );}
        return (
          <div>
              <form className="modMsgForm" onSubmit={modMsg}>

                  <input type="text" id="content" defaultValue = {text} />

                  <button className="submitBtn button " type="submit" >
                      <FontAwesomeIcon icon={faPaperPlane} />
                  </button>
              </form>
          </div>
        )    
  };

export default ModMsg;