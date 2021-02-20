let path;

if (
  window.location.href.indexOf("localhost") !== -1 ||
  window.location.href.indexOf("dev") !== -1
) {
  // path = "https://radiant-harbor-33607.herokuapp.com/api/v1";
  path = "http://localhost:3000/api/v1";
}

// USERS //

//Register user - POST
export const REGISTER_USER = `${path}/user/register`;

//Login user - POST
export const LOGIN_USER = `${path}/user/login`;
