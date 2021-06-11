import React, { useState } from "react";
import { Redirect, Route } from "react-router-dom";

import route from '../../service/userCall'

const Login = () => {

  const [loginCorrect, loginOk] = useState(null)

  function login(submitEvent) {

    submitEvent.preventDefault();

    const user = { email: null, password: null };

    const form = submitEvent.target;

    user.email = form.email.value;
    user.password = form.password.value;

    const userJson = JSON.stringify(user);

    // Envoie de la requette
    route.login(userJson, loginOk)
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

        <h2 className="formTitle">Se connecter</h2>

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