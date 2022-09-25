import React from "react";
import ReactDOM from "react-dom";
import AuthContext from "./store/auth-context";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <AuthContext>
    <App />
  </AuthContext>,
  document.getElementById("root")
);
