import React from "react";
import axios from "axios";

const CreateMsg = ({setHaveToUpdate}) => {

  function createMsg(submitEvent) {

    submitEvent.preventDefault();

    const msg = { content: null};
    const form = submitEvent.target;

    msg.content = form.content.value;
    const msgJson = JSON.stringify(msg);

    
    axios
      .post('http://localhost:3000/message', msgJson, {
        headers: {
        authorization: localStorage.token,
          "content-type": "application/json",
        },
      }).then((response) => {
        
        if ( response.status === 201){
          setHaveToUpdate(true)
          console.log(response)
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <main className="NewMsgDiv">
        
      <form className="newMsgFrom" onSubmit={createMsg}>

        <label htmlFor="content">Votre Message</label>

        <input type="text" id="content" />

        <button className="submitBtn" type="submit" >
          Envoyer
        </button>
      </form>
    </main>
  );
};

export default CreateMsg;