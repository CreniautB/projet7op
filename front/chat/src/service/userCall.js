import axios from 'axios';
const mainRoute = 'http://localhost:3000/user'

const login = function(userJson, loginOk){
    axios
    .post(mainRoute+'/login', userJson, {
      headers: {
        "content-type": "application/json",
      },
    })
    .then((response) => {
      if (response.status === 200) {
        const token = "token " + response.data.token
        document.cookie = `authToken=${token}; sameSite=Strict`;
        localStorage.setItem("token", token);
        localStorage.setItem("userId", response.data.userId);
        localStorage.setItem("userRole", response.data.userRole);
      
          loginOk(true)
      }
    })
    .catch((error) => {
      console.log(error);
    });
}


const signup = function (userJson, loginOk ){
    axios
      .post(mainRoute+'/signup', userJson, {
        headers: {
          "content-type": "application/json",
        },
      })
      .then((response) => {
        if (response.status === 201) {
          axios.post('http://localhost:3000/user/login', userJson, {
            headers: {
              "content-type": "application/json",
            },
          })
          .then((response) => {
            if (response.status === 200) {
                const token = "token " + response.data.token
                document.cookie = `authToken=${token}; sameSite=Strict`;
                localStorage.setItem("token", token);
                loginOk(true)
            }
          })
        }
      })

      .catch((error) => {
        console.log(error);
      });
}

export default { login, signup}