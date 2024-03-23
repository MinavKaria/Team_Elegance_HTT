import React, { createContext } from 'react';

export const AppStateContext =createContext();

const AppStateProvider = props => {

  const contextValue={...yourContext}

  return (
    <AppStateContext.Provider value={contextValue}>
      {props.children}
    </AppStateContext.Provider>
  );
};

export default AppStateProvider;