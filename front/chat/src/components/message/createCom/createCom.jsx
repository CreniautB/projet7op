import React from "react";
import axios from "axios";

const CreateCom = ({ id,setHaveToUpdate }) => {

  function createCom(submitEvent) {

    submitEvent.preventDefault();

    const com = { content: null};
    const form = submitEvent.target;

    com.content = form.content.value;
    const comJson = JSON.stringify(com);

    const msgId = JSON.stringify(id)

    axios
      .put('http://localhost:3000/message/'+msgId+'/com', comJson, {
        headers: {
        authorization: localStorage.token,
          "content-type": "application/json",
        },
      }).then((response) => {
        
        if ( response.status === 201){
          setHaveToUpdate(true)
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <main className="NewcomDiv">
        
      <form className="newcomFrom" onSubmit={createCom}>

        <input type="text" id="content" />

        <button className="submitBtn" type="submit">
          Envoyer commentaire
        </button>
      </form>
    </main>
  );
};

export default CreateCom;