import api from "../data/api";

export function signUp(data) {
  return dispatch => {
    return api.signup(data).then(response => {});
  };
}

export function login(data) {
  return dispatch => {
    return api.login(data).then(response => {
      console.log(response.data);
      const token = response.data.token;
      localStorage.setItem("token", token);
      return dispatch({
        type: "LOGIN",
        payload: { token }
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
