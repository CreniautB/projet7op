import React, { useRef, useState } from "react";
import { Redirect, Route } from "react-router-dom";
import ErrorLog from "./errorLog"
import route from '../../../service/userCall'

const Login = () => {

  const [loginCorrect, loginOk] = useState(null)
  const [errorLog, setErrorLog] = useState(null) 
  const form = useRef(null)

  function login(submitEvent) {

    submitEvent.preventDefault();

    const user = { email: null, password: null };

    user.email = form.current.email.value;
    user.password = form.current.password.value;

    const userJson = JSON.stringify(user);

    // Envoie de la requette,
    route.login(userJson, loginOk, setErrorLog)
  }

  if ( loginCorrect ) {
    return (
      <Route>
        <Redirect to="/message" />
      </Route>
    );
  }

  if (errorLog) {
    return (
      <Route>
        <Redirect to="/message" />
      </Route>
    );
  }

  return (

    <main className="loginDiv">

      <form ref={form} className="loginForm" onSubmit={login}>

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
};

export default Login;