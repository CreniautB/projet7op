import axios from 'axios';
const mainRoute = 'http://localhost:3000/user'

const login = function(userJson){
    return axios
    .post(mainRoute+'/login', userJson, {
      headers: {
        "content-type": "application/json",
      },
    })
}

const signup = function (userJson ){
    return axios
      .post(mainRoute+'/signup', userJson, {
        headers: {
          "content-type": "application/json",
        },
      })

}

const delAcc = function(){
  axios.delete(mainRoute+"/delete/"+localStorage.userId, {
    headers: {
      authorization: localStorage.token,
      "content-type" : "application/json",
    },
  })
}

const exports = { login, signup, delAcc }

export default exports