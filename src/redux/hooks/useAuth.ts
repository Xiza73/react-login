import { useLoader } from "@/context";
import { useDispatch } from ".";
import { useCallback } from "react";
import { removeStorage, setStorage, sleep } from "@/helpers";
import { login, logout } from "..";
import { AUTH_KEY } from "@/constants";

export const useAuth = () => {
  const dispatch = useDispatch();
  const { startLoading, stopLoading } = useLoader();

  const loginAction = useCallback(async () => {
    startLoading();
    await sleep(2000);
    setStorage(AUTH_KEY, true);
    dispatch(login());
    stopLoading();
  }, [dispatch, startLoading, stopLoading]);

  const logoutAction = useCallback(async () => {
    startLoading();
    await sleep(2000);
    removeStorage(AUTH_KEY);
    dispatch(logout());
    stopLoading();
  }, [dispatch, startLoading, stopLoading]);

  return { login: loginAction, logout: logoutAction };
};
