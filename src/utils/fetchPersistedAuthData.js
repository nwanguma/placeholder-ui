const fetchPersistedAuthData = () => {
  const token = sessionStorage.getItem("token");
  const userInfo = JSON.parse(sessionStorage.getItem("userInfo"));

  if (token && userInfo) return { token, userInfo };
};

export default fetchPersistedAuthData;
