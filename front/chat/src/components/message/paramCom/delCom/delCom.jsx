import React from "react";


const DelCom = ({ id, user, setHaveToUpdate={setHaveToUpdate}, route }) => {
 
  function delCom(submitEvent) {

    submitEvent.preventDefault();

    const comId = JSON.stringify(id)

    const userId = JSON.stringify(user)

    // Envoie de la requete
    route.delCom(comId, userId,setHaveToUpdate)


  }
  if (Number(localStorage.userId) === Number(user) || localStorage.userRole === "admin") {
  
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