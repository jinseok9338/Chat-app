import React from "react";
import "./App.css";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import DashBoard from "./Dashboard";
import Store from "./store";

function App() {
  return (
    <div>
      <Store>
        <DashBoard />
      </Store>
    </div>
  );
}

export default App;
