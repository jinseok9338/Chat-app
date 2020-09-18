import React, { useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Chip from "@material-ui/core/Chip";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import { ctx } from "./store";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "50px",
    // width: theme.spacing(16),
    // height: theme.spacing(16),
    padding: theme.spacing(3, 2),
  },

  flex: {
    display: "flex",
    alignItems: "center",
  },

  topicsWindow: {
    width: "30%",
    height: "300px",
    borderRight: "1px solid grey",
  },
  chatWindow: {
    width: "70%",
    height: "300px",
    padding: "20px",
  },
  chatBox: {
    width: "85%",
  },
  button: {
    width: "15%",
  },
}));

const DashBoard = () => {
  const classes = useStyles();
  // ctx store
  const [allChats] = useContext(ctx);
  const topics = Object.keys(allChats);

  //local state
  const [activeTopic, changeActiveTopic] = useState(topics[0]);
  const [textValue, changeTextValue] = useState("");

  return (
    <div>
      <Paper className={classes.root}>
        <Typography variant="h4" component="h4">
          Chat App
        </Typography>

        <Typography variant="h5" component="h5">
          {activeTopic}
        </Typography>

        <div className={classes.flex}>
          <div className={classes.topicsWindow}>
            <List>
              {topics.map((topic) => (
                <ListItem
                  onClick={(e) => changeActiveTopic(e.target.innerText)}
                  key={topic}
                  button
                >
                  <ListItemIcon></ListItemIcon>
                  <ListItemText primary={topic} />
                </ListItem>
              ))}
            </List>
          </div>
          <div className={classes.chatWindow}>
            {allChats[activeTopic].map((chat, i) => (
              <div className={classes.flex}>
                <Chip label={chat.from} className={classes.chip} key={i} />
                <Typography variant="body1" gutterBottom>
                  {chat.msg}
                </Typography>
              </div>
            ))}
          </div>
        </div>
        <div className={classes.flex}>
          <TextField
            label="Send a Chat"
            value={textValue}
            onChange={(e) => changeTextValue(e.target.value)}
            className={classes.chatBox}
          />
          <Button variant="contained" color="primary">
            Send
          </Button>
        </div>
      </Paper>
    </div>
  );
};

export default DashBoard;
