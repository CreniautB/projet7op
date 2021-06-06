import React, { useState } from "react";
import axios from "axios";
import { Redirect, Route } from "react-router-dom";


const Signup = () => {

  const [loginCorrect, loginOk] = useState(null)

  function signUp(submitEvent) {

    submitEvent.preventDefault();

    const user = { email: null, pseudo: null, password: null };

    const form = submitEvent.target;

    user.email = form.email.value;
    user.pseudo = form.pseudo.value;
    user.password = form.password.value;

    const userJson = JSON.stringify(user);

    axios
      .post('http://localhost:3000/user/signup', userJson, {
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
  if ( loginCorrect ) {
    return (
      <Route>
        <Redirect to="/message" />
      </Route>
    );
  }

  else {
    return (
      <main className="signupDiv">
        <form className="signupForm" onSubmit={signUp}>

          <h2 className="formTitle">S'inscrire</h2>

          <label htmlFor="pseudo">Prénom</label>

          <input type="text" id="pseudo" />

          <label htmlFor="email">Email</label>
      
          <input type="email" id="email" />

          <label htmlFor="password">Mot de passe</label>

          <input type="password" id="password" />

          <button className="submitBtn" type="submit">
            S'inscrire
          </button>
        </form>
      </main>
    );
  };
}

export default Signup;