import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import firebase from "firebase";
import ReduxThunk from "redux-thunk";
import reducers from "./reducers";
import Router from "./Router";

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyAVBQLbcmHDLUD6wgqk-MItTOsV5s69Oa8",
      authDomain: "manager-396db.firebaseapp.com",
      databaseURL: "https://manager-396db.firebaseio.com",
      projectId: "manager-396db",
      storageBucket: "manager-396db.appspot.com",
      messagingSenderId: "1084428016288"
    };

    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
