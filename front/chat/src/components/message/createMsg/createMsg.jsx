import React from "react";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import routes from '../../../service/messageCall'

const CreateMsg = ({setHaveToUpdate, setHaveToScroll}) => {

  function createMsg(submitEvent) {

    submitEvent.preventDefault();

    const msg = { content: null};
    const form = submitEvent.target;

    msg.content = form.content.value;
    const msgJson = JSON.stringify(msg);
    
    // Envoie de la requete
    routes.createMsg(msgJson, setHaveToUpdate, setHaveToScroll)

  }

  return (
      <form className="newMsgFrom" onSubmit={createMsg}>

        <label htmlFor="content">Votre Message</label>

        <textarea type="text" id="content" />

        <button className="submitBtn" type="submit" >
           <FontAwesomeIcon icon={faPaperPlane} />
        </button>
      </form>
  );
};

export default CreateMsg;