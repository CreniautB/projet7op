import React, {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import routes from '../../../../service/messageCall'
import AccHandle from "../../accHandle/accHandle";
import  "./createMsg.css";

const CreateMsg = ({setHaveToUpdate, setHaveToScroll, setDisconnect}) => {

  const [clearInput, setClearInput] = useState(false)

  function createMsg(submitEvent) {
    
    submitEvent.preventDefault();

    const msg = { content: null};
    const form = submitEvent.target;

    msg.content = form.content.value;
    const msgJson = JSON.stringify(msg);
    
    // Envoie de la requete
    routes.createMsg(msgJson, setHaveToUpdate, setHaveToScroll, setClearInput)

    if (clearInput){
      form.content.value =''
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