export const LoaderActions = {
  START_LOADING: "START_LOADING",
  STOP_LOADING: "STOP_LOADING",
} as const;
export type LoaderActions = (typeof LoaderActions)[keyof typeof LoaderActions];

interface StartLoadingAction {
  type: typeof LoaderActions.START_LOADING;
}

interface StopLoadingAction {
  type: typeof LoaderActions.STOP_LOADING;
}

export type LoaderAction = StartLoadingAction | StopLoadingAction;
