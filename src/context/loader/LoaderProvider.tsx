import { useCallback, useMemo, useReducer } from "react";
import {
  LoaderActions,
  LoaderContext,
  LoaderProviderProps,
  loaderReducer,
} from ".";

export const LoaderProvider: React.FC<LoaderProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(loaderReducer, {
    isLoading: false,
  });

  const startLoading = useCallback(() => {
    dispatch({ type: LoaderActions.START_LOADING });
  }, []);

  const stopLoading = useCallback(() => {
    dispatch({ type: LoaderActions.STOP_LOADING });
  }, []);

  const value = useMemo(
    () => ({
      ...state,
      startLoading,
      stopLoading,
    }),
    [state, startLoading, stopLoading]
  );

  return (
    <LoaderContext.Provider value={value}>{children}</LoaderContext.Provider>
  );
};
