import React from "react";
import axios from "axios";

const DelMsg = ({id}) => {

  function delMsg(submitEvent) {

    submitEvent.preventDefault();

    axios.delete('http://localhost:3000/message/', id, {
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
    <div>
        <p onClick={delMsg} >X </p>
    </div>
  );
};

export default DelMsg