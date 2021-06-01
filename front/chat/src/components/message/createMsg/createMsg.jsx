import React from "react";
import axios from "axios";

const CreateMsg = () => {

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
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <main className="signupDiv">
        
      <form className="signupForm" onSubmit={createMsg}>

        <h1 className="formTitle">Nouveau Message</h1>

        <label htmlFor="content">Votre Message</label>

        <input type="text" id="content" />

        <button className="submitBtn" type="submit">
          Envoyer
        </button>
      </form>
    </main>
  );
};

export default CreateMsg;