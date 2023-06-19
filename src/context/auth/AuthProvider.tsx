import { getStorage, removeStorage, setStorage, sleep } from "@/helpers";
import { useCallback, useMemo, useState } from "react";
import { AuthContext } from ".";
import { useLoader } from "..";

const AUTH_KEY = "is-authenticated";

export interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    getStorage<boolean>(AUTH_KEY) || false
  );
  const { startLoading, stopLoading } = useLoader();

  const login = useCallback(async () => {
    startLoading();
    await sleep(2000);
    setStorage(AUTH_KEY, true);
    setIsAuthenticated(true);
    stopLoading();
  }, []);

  const logout = useCallback(async () => {
    startLoading();
    await sleep(2000);
    removeStorage(AUTH_KEY);
    setIsAuthenticated(false);
    stopLoading();
  }, []);

  const value = useMemo(
    () => ({ isAuthenticated, login, logout }),
    [isAuthenticated, login, logout]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
