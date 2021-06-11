import axios from 'axios';
const mainRoute = 'http://localhost:3000/message'


 const callMsg = function( setMessages, setHaveToUpdate, setHaveToScroll ){
    axios.get(mainRoute, {
        headers: {
        authorization: localStorage.token,
        "content-type": "application/json",
        },
    } )
        .then(res => {
        const message = res.data
            setMessages(message);
            setHaveToUpdate(false)
            setHaveToScroll(false)
        },
    )
}

const createMsg = function(msgJson, setHaveToUpdate, setHaveToScroll)
{
    axios
    .post(mainRoute, msgJson, {
      headers: {
      authorization: localStorage.token,
        "content-type": "application/json",
      },
    }).then((response) => {
      
      if ( response.status === 201){
        setHaveToUpdate(true);
        setHaveToScroll(true);
      }
    })
    .catch((error) => {
      console.log(error);
    });
}


const modMsg = function(msgId, userId, msgJson, setHaveToUpdate, setDisplay )
{
  axios
  .patch(mainRoute+msgId+"/"+userId,  msgJson, {
    headers: {
    authorization: localStorage.token,
      "content-type": "application/json",
    },
  })
  .then((response) => {
    if ( response.status === 200){
      setHaveToUpdate(true)
    }
  })
  .then(() => setDisplay(false))
}


const delMsg = function(messageId, setHaveToUpdate, userId){
  axios.delete(mainRoute+messageId, {
    headers: {
    authorization: localStorage.token,
      "content-type": "application/json",
    },
    data:{
      userId : userId
    }
  })
  .then((response) => {
    
    if ( response.status === 201){
      setHaveToUpdate(true)
    }
  })
  .catch((error) => {
    console.log(error);
  });
}

const createCom = function(msgId, comJson, setHaveToUpdate)
{
  axios
  .put(mainRoute+'/'+msgId+'/com', comJson, {
    headers: {
    authorization: localStorage.token,
      "content-type": "application/json",
    },
  }).then((response) => {
    
    if ( response.status === 201){
      setHaveToUpdate(true)
    }
  })
  .catch((error) => {
    console.log(error);
  });
}


const delCom = function(comId, userId, setHaveToUpdate){
  axios.delete(mainRoute+'/com/'+comId, {
    headers: {
    authorization: localStorage.token,
      "content-type": "application/json",
    },
    data:{
      userId : userId
    }
  }).then(() => {
      setHaveToUpdate(true)
  })
  .catch((error) => {
    console.log(error);
  });
}


const modCom = function(comId, userId, msgJson, setHaveToUpdate, setDisplay){
  axios
  .patch( mainRoute+'/com/'+comId+"/"+userId,  msgJson, {
    headers: {
    authorization: localStorage.token,
      "content-type": "application/json",
    },
  }).then((response) => {
    if ( response.status === 200){
      setHaveToUpdate(true)
    }
  })
  .then(() => setDisplay(false))
}

export default {callMsg, createMsg, delMsg, modMsg, createCom, delCom, modCom}
