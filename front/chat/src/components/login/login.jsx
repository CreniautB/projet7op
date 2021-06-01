import React, { useState } from "react";
import axios from "axios";
import { Redirect, Route } from "react-router-dom";

const Login = () => {

  const [loginCorrect, loginOk] = useState(null)

  function login(submitEvent) {

    submitEvent.preventDefault();

    const user = { email: null, password: null };

    const form = submitEvent.target;

    user.email = form.email.value;
    user.password = form.password.value;

    const userJson = JSON.stringify(user);

    axios
      .post('http://localhost:3000/user/login', userJson, {
        headers: {
          "content-type": "application/json",
        },
      })
      .then((response) => {
        if (response.status === 200) {
            document.cookie = `authToken=${response.data.token}; sameSite=Strict`;
            localStorage.setItem("token", response.data.token);
            loginOk(true)
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

    <main className="loginDiv">

      <form className="loginForm" onSubmit={login}>

        <h1 className="formTitle">Se connecter</h1>

        <label htmlFor="email">Email</label>
    
        <input type="email" id="email" />

        <label htmlFor="password">Mot de passe</label>

        <input type="password" id="password" />

        <button className="submitBtn" type="submit">
            Connexion
        </button>
      </form>
    </main>
  );
  }
};

export default Login;