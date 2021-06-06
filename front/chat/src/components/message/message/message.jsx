import React, { useEffect, useState } from "react";
import axios from 'axios';
import CreateMsg from '../createMsg/createMsg.jsx'
import CreateCom from '../createCom/createCom.jsx'
import DelMsg from '../delMsg/delMsg.jsx'
import DelCom from "../delCom/delCom.jsx";
import ModMsg from "../modMsg/modMsg.jsx"
import ModCom from '../modCom/modCom.jsx'
import Header from '../../header/header.jsx'
import './message.css';


function Message() {
  const [messages, setMessages] = useState([]);
  const [haveToUpdate, setHaveToUpdate] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:3000/message", {
      headers: {
        authorization: localStorage.token,
        "content-type": "application/json",
      },
    } )
      .then(res => {
        const message = res.data
          setMessages(message);
          setHaveToUpdate(false)
        },

      )
  }, [haveToUpdate])


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
                  <div>
                    <DelMsg id = {item.id} user = {item.User.id} setHaveToUpdate={setHaveToUpdate}/> 
                    <ModMsg id = {item.id} user = {item.User.id} text = {item.content}setHaveToUpdate={setHaveToUpdate} />
                  </div>
                </div>
                <ul>
                {item.Comments.map(com => (
                  <li key={com.createdAt}>
                    {com.content}
                    <DelCom id = {com.id} user = {com.User.id} setHaveToUpdate={setHaveToUpdate} />
                    <ModCom id = {com.id} user = {com.User.id} text = {com.content} setHaveToUpdate={setHaveToUpdate} />
                  </li>
                ))}
                </ul>
                <CreateCom id = {item.id}  setHaveToUpdate={setHaveToUpdate} />
              </li>
            ))}
          </ul>

          <CreateMsg setHaveToUpdate={setHaveToUpdate} />
      </div>
    </div>
    );
  }

  export default Message