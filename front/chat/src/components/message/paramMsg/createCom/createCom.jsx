import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

import routes from '../../../../service/messageCall'

const CreateCom = ({ id,setHaveToUpdate }) => {

  function createCom(submitEvent) {

    submitEvent.preventDefault();

    const com = { content: null};
    const form = submitEvent.target;

    com.content = form.content.value;
    const comJson = JSON.stringify(com);

    const msgId = JSON.stringify(id)

    // Envoie de la requete
    routes.createCom(msgId, comJson,setHaveToUpdate)

    form.content.value = ''

  }

  return (
    <div className="NewcomDiv">
        
      <form className="newcomFrom" onSubmit={createCom}>

        <input type="text" id="content" placeholder="Commentez"/>

        <button className="submitBtn" type="submit">
          <FontAwesomeIcon icon={faPaperPlane} />
        </button>
      </form>
    </div>
  );
};

export default CreateCom;