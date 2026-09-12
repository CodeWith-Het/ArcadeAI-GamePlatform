import { useDispatch, useSelector } from "react-redux";

import { loginUser, registerUser } from "../store/authSlice";
import { logout, clearAuthError } from "../store/authSlice";

const useAuth = () => {
  const dispatch = useDispatch();

  const { user, loading, error, success, isAuthenticated } = useSelector(
    (state) => state.auth
  );

  const login = (data) => {
    return dispatch(loginUser(data)).unwrap()
  };

  const register = (data) => {
    return dispatch(registerUser(data)).unwrap()
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  const clearError = () => {
    dispatch(clearAuthError());
  };

  return {
    user,
    loading,
    error,
    success,
    isAuthenticated,

    login,
    register,
    logout: handleLogout,
    clearError,
  };
};

export default useAuth;