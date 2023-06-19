import { createContext } from "@/helpers";
import { AuthContextProps, AuthState } from ".";

const initialState: AuthState = {
  isAuthenticated: false,
};

export const [AuthContext, useAuth] = createContext<AuthContextProps>(
  {
    ...initialState,
    login: () => {},
    logout: () => {},
  },
  "Auth"
);
