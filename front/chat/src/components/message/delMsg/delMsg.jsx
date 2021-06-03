import React from "react";
import axios from "axios";


const DelMsg = ({ id, user, setHaveToUpdate }) => {
 
  function delMsg(submitEvent) {

    submitEvent.preventDefault();

    const messageId = JSON.stringify(id)

    const userId = JSON.stringify(user)

    axios.delete('http://localhost:3000/message/'+messageId, {
        headers: {
        authorization: localStorage.token,
          "content-type": "application/json",
        },
        data:{
          userId : userId
        }
      })
      .then((response) => {
        
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
    <div>
        <p onClick={delMsg} >X </p>
    </div>
  );
};

export default DelMsg