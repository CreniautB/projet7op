import axios from 'axios';
const mainRoute = 'http://localhost:3000/message'

 const callMsg = function(){
    return axios.get(mainRoute, {
        headers: {
        authorization: localStorage.token,
        "content-type": "application/json",
        },
    } )
}

const createMsg = function(msgJson){
  return axios
    .post(mainRoute, msgJson, {
      headers: {
      authorization: localStorage.token,
        "content-type": "application/json",
      },
    })

}


const modMsg = function(msgId, user, msgJson)
{
  return axios
  .patch(mainRoute+"/"+msgId+"/"+user,  msgJson, {
    headers: {
    authorization: localStorage.token,
      "content-type": "application/json",
    },
  })
}

const modCom = function(comId, userId, msgJson){
  return axios
  .patch( mainRoute+'/com/'+comId+"/"+userId,  msgJson, {
    headers: {
    authorization: localStorage.token,
      "content-type": "application/json",
    },
  })
}


const delMsg = function(messageId, userId){
  return axios.delete(mainRoute+'/'+messageId, {
    headers: {
    authorization: localStorage.token,
      "content-type": "application/json",
    },
    data:{
      userId : userId
    }
  })
}

const createCom = function(msgId, comJson)
{
  return axios
  .put(mainRoute+'/'+msgId+'/com', comJson, {
    headers: {
    authorization: localStorage.token,
      "content-type": "application/json",
    },
  })
}


const delCom = function(comId, userId){
  return axios.delete(mainRoute+'/com/'+comId, {
    headers: {
    authorization: localStorage.token,
      "content-type": "application/json",
    },
    data:{
      userId : userId
    }
  })
}

const exports = {callMsg, createMsg, delMsg, modMsg, createCom, delCom, modCom}


export default exports
