import { createContext } from "@/helpers";

interface AuthState {
  isAuthenticated: boolean;
}

interface AuthContextProps extends AuthState {
  login: () => void;
  logout: () => void;
}

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
