import React from "react";
import {
  BrowserRouter as Router,

  Route, Switch
} from "react-router-dom";
import Dashboard from "./pages/dashboard";
import ForgetPassword from "./pages/forget-password";
import Login from "./pages/login";
import Register from "./pages/register";
import ResetPassword from "./pages/reset-password";
import GlobalStyle from "./styles/global";

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

        <Route path="/dashboard">
          <Dashboard />
        </Route>

      </Switch>
      <GlobalStyle />
    </Router>
  );
}

export default App;
