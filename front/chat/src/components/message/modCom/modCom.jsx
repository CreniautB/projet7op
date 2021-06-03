import React, { useState } from "react";
import axios from "axios";

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


    axios
      .patch('http://localhost:3000/message/com/'+comId+"/"+userId,  msgJson, {
        headers: {
        authorization: localStorage.token,
          "content-type": "application/json",
        },
      }).then((response) => {
        if ( response.status === 200){
          setHaveToUpdate(true)
        }
      })
      .then(() => setDisplay(false))
  }

  if (!display)

  return (
    <div>
        <button onClick={formdisplay}>
            modifié le commentaire
        </button>
    </div>
  );

  else{
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
};

export default ModCom;