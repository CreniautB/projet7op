import React from "react";
import route from '../../../../service/messageCall'

const DelCom = ({ comId, userId, setHaveToUpdate }) => {
 
  function delCom(submitEvent) {

    submitEvent.preventDefault();

    const com = JSON.stringify(comId)
    const user = JSON.stringify(userId)

    // Envoie de la requete
    route.delCom(com, user)
      .then(() => {
        setHaveToUpdate(true)
    })
    .catch((error) => {
      console.log(error);
    });
  }
  
  
    return (
      <div>
          <button onClick={delCom} >SUPRIMER</button>
      </div>
    );
}


export default DelCom;