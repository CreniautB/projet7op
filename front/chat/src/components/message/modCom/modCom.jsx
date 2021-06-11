import React, { useState } from "react";
import routes from '../../../service/messageCall'

const ModCom = ({ id, user, text, setHaveToUpdate }) => {


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
    const comId = JSON.stringify(id) 
    const userId = JSON.stringify(user)

    // Envoie de la requete
    routes.modCom(comId, userId, msgJson, setHaveToUpdate, setDisplay)


  }

  if (localStorage.userId === user || localStorage.userRole === "admin"){
    if (!display)
      {
      return (
        <div>
            <button onClick={formdisplay}>
                modifié le commentaire
            </button>
        </div>
      );
    }
      return (
          <div>
              <form className="modComFrom" onSubmit={modCom}>

                  <label htmlFor="content">Votre commentaire</label>

                  <input type="text" id="content" defaultValue = {text} />

                  <button className="submitBtn" type="submit">
                      Envoyer votre commentaire
                  </button>
              </form>
          </div>
    )
  }

  return (
    <div></div>
  )


}

export default ModCom;