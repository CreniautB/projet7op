import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

import routes from '../../../../service/messageCall'

const CreateCom = ({ idMsg ,setHaveToUpdate }) => {

  const [displayed, setDisplayed] = useState(false);

  function formdisplay(submitEvent) {      
    submitEvent.preventDefault();
    setDisplayed(true)
  }    

  function createCom(submitEvent) {

    submitEvent.preventDefault();

    const com = { content: null};
    const form = submitEvent.target;

    com.content = form.content.value;
    const comJson = JSON.stringify(com);

    const msgId = JSON.stringify(idMsg )

    if (com.content !== ''){
      // Envoie de la requete
      return routes.createCom(msgId, comJson)
      .then(() => {
          setHaveToUpdate(true) 
          form.content.value = ''
      })
      .catch((error) => {
        console.log(error);
      });
    }
  }

  if (!displayed){
    return(
      <div>
        <button className="button" onClick={formdisplay}>
            Commenter
        </button>
      </div>
    )
  }

  return (
    <div className="NewcomDiv">
        
      <form className="newcomFrom" onSubmit={createCom}>

        <input type="text" id="content" placeholder="Commentez"/>

        <button className="submitBtn button" type="submit">
          <FontAwesomeIcon icon={faPaperPlane} />
        </button>
      </form>
    </div>
  );
};

export default CreateCom;