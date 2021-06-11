import React, { useState, useRef } from "react";
import { Redirect, Route } from "react-router-dom";
import route from '../../service/userCall'

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


    // Envoie de la requete
    route.signup(userJson, loginOk)


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