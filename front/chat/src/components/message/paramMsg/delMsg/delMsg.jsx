import React from "react";
import routes from '../../../../service/messageCall'

const DelMsg = ({ idMsg, userId, setHaveToUpdate }) => {
 
  function delMsg(submitEvent) {

    submitEvent.preventDefault();

    const message = JSON.stringify(idMsg)

    const user = JSON.stringify(userId)

     routes.delMsg(message, user)
    .then(() => {
    
        setHaveToUpdate(true)
    
    })
    .catch((error) => {
      console.log(error);
    });

  };

    return (
      <div className="delMsg">
          <button className="button" onClick={delMsg} > Suprimer </button>
      </div>
    );
  

}
export default DelMsg