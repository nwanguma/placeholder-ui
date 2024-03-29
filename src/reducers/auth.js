import fetchPersistedAuthData from "../utils/fetchPersistedAuthData";

const persistedAuthData = fetchPersistedAuthData();

const initialState = {
  user: persistedAuthData ? persistedAuthData.userInfo : {},
  authenticated: !!persistedAuthData,
};

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "LOGIN_USER":
      return { ...state, user: payload, authenticated: !!payload };
    default:
      return state;
  }
};

export default authReducer;
