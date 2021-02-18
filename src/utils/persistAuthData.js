const persistAuthData = (data) => {
  if (data) {
    const { token, user } = data;

    sessionStorage.setItem("token", token);
    sessionStorage.setItem("userInfo", JSON.stringify(user));
  }
};

export default persistAuthData;
