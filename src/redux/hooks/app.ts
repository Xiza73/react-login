import { AppDispatch, RootState } from "..";
import * as Redux from "react-redux";

export const useDispatch = () => Redux.useDispatch<AppDispatch>();
export const useSelector: Redux.TypedUseSelectorHook<RootState> =
  Redux.useSelector;
