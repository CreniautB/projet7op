import React, { useEffect, useState, useRef  } from "react";
import CreateMsg from '../createMsg/createMsg.jsx'
import CreateCom from '../createCom/createCom.jsx'
import DelMsg from '../delMsg/delMsg.jsx'
import ModMsg from "../modMsg/modMsg.jsx"
import ParamCom from '../paramCom/paramCom.jsx'
import Header from '../../header/header.jsx'
import './message.css';

import routes from '../../../service/messageCall'


// Request for all messages
function Message() {
  const [messages, setMessages] = useState([]);
  const [haveToUpdate, setHaveToUpdate] = useState(null);
  const [haveToScroll, setHaveToScroll] = useState(null);

  useEffect(() => {
    // Envoie de la requette
    routes.callMsg(setMessages, setHaveToUpdate, setHaveToScroll);
  }, [haveToUpdate])

  // Scroll to latest message
  useEffect(() => {
    document.querySelector('.feed').scrollTo({
      top: document.querySelector('.feed').scrollHeight,
      left: 0,
      behavior: 'smooth'
    });
  },
  [haveToScroll])

    return (
      <div className="parentMsgContainer">
        <Header />
        <div className="messageContainer">
          <ul className="feed" >
            {messages.map(item => (
              
              <li key={item.id}>
                <small>{item.User.pseudo}</small>
                <div className="msgContentContainer">
                  <div  ><p className="msgContent">{item.content}</p></div>
                  <div className="paramMsg" >
                    <DelMsg id = {item.id} user = {item.User.id} setHaveToUpdate={setHaveToUpdate}/> 
                    <ModMsg id = {item.id} user = {item.User.id} text = {item.content}setHaveToUpdate={setHaveToUpdate} />
                  </div>
                </div>
                <ul>
                <div className="comTitle">Commentaires</div>
                {item.Comments.map(com => (
                  <li key={com.createdAt} className="commentParam">
                    <p className="commentContent">{com.content}</p>
                    <ParamCom id = {com.id} user = {com.User.id} text = {com.content} setHaveToUpdate={setHaveToUpdate} /> 
                  </li>
                ))}
                </ul>
                <CreateCom id = {item.id}  setHaveToUpdate={setHaveToUpdate} />
              </li>
            ))}
          </ul>

          <CreateMsg setHaveToUpdate={setHaveToUpdate} setHaveToScroll={setHaveToScroll} />
      </div>
    </div>
    );
  }

  export default Message