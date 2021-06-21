import React, { useEffect, useState } from "react";
import CreateMsg from './createMsg/createMsg.jsx'
import ParamCom from '../paramCom/paramCom'
import Header from '../../header/header.jsx'
import { Redirect, Route } from "react-router";
import ParamMsg from "../paramMsg/paramMsg";

import './message.css';
import routes from '../../../service/messageCall'

// Request for all messages
function Message() {
  const [messages, setMessages] = useState([]);
  const [haveToUpdate, setHaveToUpdate] = useState(null);
  const [haveToScroll, setHaveToScroll] = useState(null);
  const [disconnect, setDisconnect] = useState(false);

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

  if (disconnect) {
    return( 
      <Route>
        <Redirect to="/" />
      </Route>
    )
  }

    return (
      <div className="parentMsgContainer">
        <Header />
        <div className="messageContainer">
          <ul className="feed" >
            {messages.map(item => (
              <li key={item.id}  >
                <small>{item.User.pseudo}</small>
                <div className="msgContentContainer">
                  <div><p className="msgContent">{item.content}</p></div>
                  <div className="paramMsg" >
                    <ParamMsg id = {item.id} user = {item.User.id} text = {item.content}  setHaveToUpdate={setHaveToUpdate}/>
                  </div>
                </div>
                <ul>
                {item.Comments.map(com => (
                  <li key={com.createdAt} className="commentParam">
                    <p className="commentContent"><small>{com.User.pseudo} </small>{com.content}</p>
                    <ParamCom id = {com.id} user = {com.User.id} text = {com.content} setHaveToUpdate={setHaveToUpdate} /> 
                  </li>
                ))}
                </ul>
              </li>
            ))}
          </ul>
          <CreateMsg setHaveToUpdate={setHaveToUpdate} setHaveToScroll={setHaveToScroll} setDisconnect={setDisconnect}/>
      </div>
    </div>
    );
  }

  export default Message