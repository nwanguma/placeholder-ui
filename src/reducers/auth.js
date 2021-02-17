const initialState = {
  user: {},
  authenticated: false,
};

const authReducer = (state = initialState, { type, payload }) => {
  console.log(type, payload);
  switch (type) {
    case "LOGIN_USER":
      return { ...state, user: payload };
    default:
      return state;
  }
};

export default authReducer;
