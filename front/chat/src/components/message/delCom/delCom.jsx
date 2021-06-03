import React from "react";
import axios from "axios";

const DelCom = ({ id, user, setHaveToUpdate }) => {
 
  function delCom(submitEvent) {

    submitEvent.preventDefault();

    const comId = JSON.stringify(id)

    const userId = JSON.stringify(user)

    axios.delete('http://localhost:3000/message/com/'+comId, {
        headers: {
        authorization: localStorage.token,
          "content-type": "application/json",
        },
        data:{
          userId : userId
        }
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
    <div>
        <p onClick={delCom} >X </p>
    </div>
  );
};

export default DelCom;