import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import routes from '../../../../service/messageCall'
import AccHandle from "../../accHandle/accHandle";
import  "./createMsg.css";

const CreateMsg = ({setHaveToUpdate, setHaveToScroll, setDisconnect}) => {
  function createMsg(submitEvent) {
    
    submitEvent.preventDefault();

    const msg = { content: null};
    const form = submitEvent.target;

    msg.content = form.content.value;
    const msgJson = JSON.stringify(msg);
    
    // Envoie de la requete
    if (msg.content !== ''){
      return routes.createMsg(msgJson)
      .then(() => {
        setHaveToUpdate(true);
        setHaveToScroll(true);
        form.content.value = ''
      })
      .catch((error) => {
        console.log(error);
      });
   }
  }

  return (
    <div className="sendMessage" >
      
      <form className="newMsgFrom" onSubmit={createMsg}>

        <textarea type="text" id="content" placeholder="Votre Message" />

        <button className="submitBtn" type="submit" >
           <FontAwesomeIcon icon={faPaperPlane} />
        </button>
      </form>
      <AccHandle setDisconnect={setDisconnect} /> 
    </div>
  );
};

export default CreateMsg;