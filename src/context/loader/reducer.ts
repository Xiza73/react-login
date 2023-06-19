import { LoaderAction, LoaderActions, LoaderState } from ".";

type LoaderHandler = (state: LoaderState, action: LoaderAction) => LoaderState;

const loaderReducerHandler: Record<LoaderActions, LoaderHandler> = {
  [LoaderActions.START_LOADING]: (state) => ({ ...state, isLoading: true }),
  [LoaderActions.STOP_LOADING]: (state) => ({ ...state, isLoading: false }),
};

export const loaderReducer = (
  state: LoaderState,
  action: LoaderAction
): LoaderState => loaderReducerHandler[action.type](state, action) ?? state;
