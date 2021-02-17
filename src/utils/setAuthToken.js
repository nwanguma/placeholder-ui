const setAuthToken = (token) => {
  if (token) sessionStorage.setItem("token", token);
};

export default setAuthToken;
