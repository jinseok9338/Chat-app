import React, { createContext, useReducer } from "react";

export const ctx = createContext();

/*
{
    from:'user',
    msg :'hi'
    topic:"general"
}

state{

        general:{
    [{msg},{msg},{msg}]
    }

        topic2:{
    [
    
    ]
    }
} 
*/
const initState = {
  general: [
    { from: "arron", msg: "hello" },
    { from: "arron", msg: "hello" },
    { from: "arron", msg: "hello" },
  ],
  topic2: [
    { from: "arron", msg: "hello" },
    { from: "arron", msg: "hello" },
    { from: "arron", msg: "hello" },
  ],
};

const reducer = (state, action) => {
  const { from, msg, topic } = action.payload;

  switch (action.type) {
    case "RECEIVE_MESSAGE":
      return {
        ...state,
        [topic]: [
          ...state[topic],
          {
            from,
            msg,
          },
        ],
      };

    default:
      return state;
  }
};

const Store = (props) => {
  const reducerHook = useReducer(reducer, initState);
  return <ctx.Provider value={reducerHook}>{props.children}</ctx.Provider>;
};

export default Store;
