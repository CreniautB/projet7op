import React from "react";
import routes from '../../../../service/messageCall'

const DelMsg = ({ id, user, setHaveToUpdate }) => {
 
  function delMsg(submitEvent) {

    submitEvent.preventDefault();

    const messageId = JSON.stringify(id)

    const userId = JSON.stringify(user)

    routes.delMsg(messageId, setHaveToUpdate, userId)


  };


if (Number(localStorage.userId) === Number(user) || localStorage.userRole === "admin") 
  {
    return (
      <div>
          <button onClick={delMsg} > Suprimer le message </button>
      </div>
    );
  }
  return(
    <div></div>
  )
}
export default DelMsg