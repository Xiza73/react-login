export const AuthActions = {
  LOGIN: "LOGIN",
  LOGOUT: "LOGOUT",
} as const;
export type AuthActions = (typeof AuthActions)[keyof typeof AuthActions];

interface LoginAction {
  type: typeof AuthActions.LOGIN;
}

interface LogoutAction {
  type: typeof AuthActions.LOGOUT;
}

export type AuthAction = LoginAction | LogoutAction;
