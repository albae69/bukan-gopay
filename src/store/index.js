import React, {createContext, useReducer} from 'react';

export const State = createContext();
export const Dispatch = createContext();

const initialState = {
  feed: true,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_FEED':
      return {
        ...state,
        feed: true,
      };
    case 'SET_REQUEST':
      return {
        ...state,
        feed: false,
      };
    default:
      return state;
  }
};

export default ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <State.Provider value={state}>
      <Dispatch.Provider value={dispatch}>{children}</Dispatch.Provider>
    </State.Provider>
  );
};
