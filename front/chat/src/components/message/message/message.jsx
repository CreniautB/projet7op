import React, { useEffect, useState } from "react";
import axios from 'axios';
import CreateMsg from '../createMsg/createMsg.jsx'
import DelMsg from '../delMsg/delMsg.jsx'

function Message() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [messages, setMessages] = useState([]);


  // Remarque : le tableau vide de dépendances [] indique
  // que useEffect ne s’exécutera qu’une fois, un peu comme
  // componentDidMount()
  useEffect(() => {
    axios.get("http://localhost:3000/message", {
      headers: {
        authorization: localStorage.token,
        "content-type": "application/json",
      },
    } )
      .then(res => {
        const message = res.data
          setIsLoaded(true);
          setMessages(message);
        },
        // Remarque : il faut gérer les erreurs ici plutôt que dans
        // un bloc catch() afin que nous n’avalions pas les exceptions
        // dues à de véritables bugs dans les composants.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Erreur : {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Chargement...</div>;
  } else {
    return (
      <div>
        <ul>
          {messages.map(item => { console.log(item.id); return (
            
            <li key={item.id}>
              {item.content}
              <DelMsg id = {item.id} /> 
              <ul>
              {item.Comments.map(com => (
                <li key={com.createdAt}>
                  {com.content}
                </li>
              ))}
              </ul>
            </li>
          )

              })}
        </ul>
        <CreateMsg />
    </div>
    );
  }
}
  export default Message