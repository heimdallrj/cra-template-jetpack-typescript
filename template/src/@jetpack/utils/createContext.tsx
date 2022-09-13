import React, { useReducer } from 'react';

type ContextProps = {
  reducer: () => any;
  actions: object;
  initialState: {};
};

type ProviderProps = {
  children: React.ReactNode;
};

export default function createContext({
  reducer = () => {},
  actions = {},
  initialState = {},
}: ContextProps) {
  const Context = React.createContext(initialState);

  const Provider = ({ children }: ProviderProps) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const boundActions: any = {};
    for (const key in actions) {
      boundActions[key] = (actions as any)[key](dispatch);
    }

    return (
      <Context.Provider value={{ state, ...boundActions }}>
        {children}
      </Context.Provider>
    );
  };

  return { Context, Provider };
}
