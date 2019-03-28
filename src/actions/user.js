import api from "../data/api";

export function signUp(data) {
  return dispatch => {
    return api.signup(data).then(response => {});
  };
}

export function verify(token) {
  return dispatch => {
    api
      .verify({ token })
      .then(response => {
        const { accessToken, refreshToken } = response.data;
        dispatch({
          type: "VERIFY_SUCCESS",
          payload: { accessToken, refreshToken }
        });
      })
      .catch(error => {
        dispatch({
          type: "VERIFY_FAILED"
        });
      });
  };
}

export function login(data) {
  return dispatch => {
    api
      .login(data)
      .then(response => {
        const token = response.data.token;
        const arr = token.split(".");
        const user = JSON.parse(atob(arr[1]));
        localStorage.setItem("token", token);
        dispatch({
          type: "LOGIN_SUCCESS",
          payload: { token, user, redirect: "/" }
        });
      })
      .catch(error => {
        dispatch({
          type: "LOGIN_FAILED"
        });
      });
  };
}

export function logout() {
  localStorage.removeItem("token");
  return {
    type: "LOGOUT"
  };
}

export function loadLoginFromLocalStorage() {
  const token = localStorage.getItem("token");
  if (token) {
    return {
      type: "LOGIN_FROM_LOCAL",
      payload: { token, redirect: "/" }
    };
  }
  return { type: "NULL" };
}
