import { createContext } from "@/helpers";

interface LoaderState {
  isLoading: boolean;
}

interface LoaderContextProps extends LoaderState {
  startLoading: () => void;
  stopLoading: () => void;
}

const initialState: LoaderState = {
  isLoading: false,
};

export const [LoaderContext, useLoader] = createContext<LoaderContextProps>(
  {
    ...initialState,
    startLoading: () => {},
    stopLoading: () => {},
  },
  "Loader"
);
