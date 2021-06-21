import React, { useState } from "react";
import axios from "axios";
import routes from '../../../../service/messageCall'

const ModMsg = ({ id, user, text, setHaveToUpdate }) => {

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
    const msgId = JSON.stringify(id) 
    const userId = JSON.stringify(user)

    // Envoie de la requete
    routes.modMsg(msgId, userId, msgJson, setHaveToUpdate, setDisplay)

  }


  if (Number(localStorage.userId) === Number(user) || localStorage.userRole === "admin"){
   
    if (!display){

      return (
        <div>
            <button onClick={formdisplay}>
                modifié le message
            </button>
        </div>
      );}
        return (
          <div>
              <form className="modMsgFrom" onSubmit={modMsg}>

                  <label htmlFor="content">Votre Message</label>

                  <input type="text" id="content" defaultValue = {text} />

                  <button className="submitBtn" type="submit">
                      Envoyer votre Message
                  </button>
              </form>
          </div>
        )
      }

      return(
        <div>

        </div>
      )
    
  };

export default ModMsg;