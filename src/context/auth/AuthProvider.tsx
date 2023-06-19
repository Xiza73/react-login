import { getStorage, removeStorage, setStorage, sleep } from "@/helpers";
import { useCallback, useMemo, useReducer } from "react";
import { AuthActions, AuthContext, AuthProviderProps, authReducer } from ".";
import { useLoader } from "..";

const AUTH_KEY = "is-authenticated";

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    isAuthenticated: getStorage<boolean>(AUTH_KEY) || false,
  });
  const { startLoading, stopLoading } = useLoader();

  const login = useCallback(async () => {
    startLoading();
    await sleep(2000);
    setStorage(AUTH_KEY, true);
    dispatch({ type: AuthActions.LOGIN });
    stopLoading();
  }, []);

  const logout = useCallback(async () => {
    startLoading();
    await sleep(2000);
    removeStorage(AUTH_KEY);
    dispatch({ type: AuthActions.LOGOUT });
    stopLoading();
  }, []);

  const value = useMemo(
    () => ({ ...state, login, logout }),
    [state, login, logout]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
