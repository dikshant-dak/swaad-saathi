import { createContext, useContext, Dispatch, SetStateAction, useEffect, useState } from 'react';

export interface IAuthState {
  loggedIn: boolean;
  customerId?: string | null;
  token?: string | null;
}

export const AuthStateContext = createContext<{
  authState: IAuthState;
  setAuthState: Dispatch<SetStateAction<IAuthState>>;
}>({
  authState: {
    loggedIn: false,
    customerId: null,
    token: null
  },
  setAuthState: () => console.info("setAuthState function not initialized")
});

export const useAuthState = () => {
  const context = useContext(AuthStateContext);
  const [authState, setAuthState] = useState(() => {
    if (typeof window !== 'undefined') {
      const localState = localStorage.getItem('authState');
      return localState ? JSON.parse(localState) : context.authState;
    }
    return context.authState;
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('authState', JSON.stringify(authState));
    }
  }, [authState]);

  return { authState, setAuthState };
};