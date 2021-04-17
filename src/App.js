import React from "react"

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


import GlobalStyle from "./styles/global"

import Login from "./pages/login"
import Register from "./pages/register"
import ForgetPassword from "./pages/forget-password";
import ResetPassword from "./pages/reset-password";


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
            <Login />
          </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/forget-password">
          <ForgetPassword />
        </Route>
        <Route path="/reset-password">
          <ResetPassword />
        </Route>
      </Switch>
      <GlobalStyle />
    </Router>
  );
}

export default App;
