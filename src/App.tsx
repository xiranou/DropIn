import React from "react";
import { Normalize } from "styled-normalize";
import * as firebase from "firebase/app";

import { uiConfig } from "./configs";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

const logout = () => firebase.auth().signOut();

const App = () => {
  const [isLoggedIn, setLoggedInState] = React.useState(false);
  React.useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        setLoggedInState(true);
      } else {
        setLoggedInState(false);
      }
    });
  }, []);

  return (
    <React.Fragment>
      <Normalize />
      <h1>DropIn</h1>
      {isLoggedIn ? (
        <React.Fragment>
          <p>Logged in</p>
          <button onClick={logout}>Log out</button>
        </React.Fragment>
      ) : (
        <StyledFirebaseAuth
          uiConfig={uiConfig}
          firebaseAuth={firebase.auth()}
        />
      )}
    </React.Fragment>
  );
};

export default App;
