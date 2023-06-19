import { AuthAction, AuthActions, AuthState } from ".";

type AuthHandler = (state: AuthState, action: AuthAction) => AuthState;

const authReducerHandler: Record<AuthActions, AuthHandler> = {
  [AuthActions.LOGIN]: (state) => ({ ...state, isAuthenticated: true }),
  [AuthActions.LOGOUT]: (state) => ({ ...state, isAuthenticated: false }),
};

export const authReducer = (state: AuthState, action: AuthAction): AuthState =>
  authReducerHandler[action.type](state, action) ?? state;
