import React from "react";

import Login from "./Components/Login";
import Main from "./Components/Main";

import { BrowserRouter, Switch } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Route from "./Route";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/main" component={Main} isPrivate />
        <ToastContainer autoClose={3000}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
