import {useContext} from 'react';

import {State, Dispatch} from './index';

const useStateContext = () => {
  const state = useContext(State);
  const dispatch = useContext(Dispatch);
  return {
    state,
    dispatch,
  };
};

export default useStateContext;
