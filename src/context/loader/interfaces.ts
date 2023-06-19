export interface LoaderState {
  isLoading: boolean;
}

export interface LoaderContextProps extends LoaderState {
  startLoading: () => void;
  stopLoading: () => void;
}

export interface LoaderProviderProps {
  children: React.ReactNode;
}
