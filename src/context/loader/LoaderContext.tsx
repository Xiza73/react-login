import { createContext } from "@/helpers";
import { LoaderContextProps, LoaderState } from ".";

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
