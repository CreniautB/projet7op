import React from "react";

import routes from '../../../service/messageCall'

const DelCom = ({ id, user, setHaveToUpdate={setHaveToUpdate} }) => {
 
  function delCom(submitEvent) {

    submitEvent.preventDefault();

    const comId = JSON.stringify(id)

    const userId = JSON.stringify(user)

    // Envoie de la requete
    routes.delCom(comId, userId,setHaveToUpdate)


  }

  if (localStorage.userId == user || localStorage.userRole == "admin")
  {
    return (
      <div>
          <button onClick={delCom} >suprimer le commentaire</button>
      </div>
    );
  ;
  }

  return(
    <div></div>
  )
}


export default DelCom;