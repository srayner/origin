import api from "../data/api";

export function signUp(data) {
  return dispatch => {
    return api.signup(data).then(response => {});
  };
}

export function login(data) {
  return dispatch => {
    api
      .login(data)
      .then(response => {
        console.log(response);
        const token = response.data.token;
        const arr = token.split(".");
        const user = JSON.parse(atob(arr[1]));
        console.log(user);
        console.log(arr);
        localStorage.setItem("token", token);
        dispatch({
          type: "LOGIN_SUCCESS",
          payload: { token, user, redirect: "/" }
        });
      })
      .catch(error => {
        console.log(error);
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
