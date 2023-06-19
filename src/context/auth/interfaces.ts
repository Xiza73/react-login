export interface AuthState {
  isAuthenticated: boolean;
}

export interface AuthContextProps extends AuthState {
  login: () => void;
  logout: () => void;
}

export interface AuthProviderProps {
  children: React.ReactNode;
}
