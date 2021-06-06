import React, { useState } from "react";
import axios from "axios";

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


    axios
      .patch('http://localhost:3000/message/'+msgId+"/"+userId,  msgJson, {
        headers: {
        authorization: localStorage.token,
          "content-type": "application/json",
        },
      })
      .then((response) => {
        if ( response.status === 200){
          setHaveToUpdate(true)
        }
      })
      .then(() => setDisplay(false))
  }

  console.log(localStorage.userId)
  console.log(user)
  if ( localStorage.userId == user){
    if (!display)

    return (
      <div>
          <button onClick={formdisplay}>
              modifié le message
          </button>
      </div>
    );

    else{
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
  }
  else{
    return(
      <div>

      </div>
    )
  }
};

export default ModMsg;