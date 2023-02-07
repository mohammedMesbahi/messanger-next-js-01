import axios from "axios";
import Router from "next/router";

export const signUpUser = async (data) => {
  axios.post('/api/signup', { data })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}

axios.defaults.withCredentials = true;

export const getServerSideToken = req => {
  const { signedCookies = {} } = req;
  if (!signedCookies) {
    return {};
  } else if (!signedCookies.token) {
    return {};
  }
  return { user: signedCookies.token };
};

export const getClientSideToken = () => {
  if (typeof window !== "undefined") {
    const user = window[WINDOW_USER_SCRIPT_VARIABLE] || {};
    return { user };
  }
  return { user: {} };
};

const WINDOW_USER_SCRIPT_VARIABLE = "__USER__";

export const getUserScript = user => {
  return `${WINDOW_USER_SCRIPT_VARIABLE} = ${JSON.stringify(user)};`;
};

export const authInitialProps = isProtectedRoute => ({ req, res }) => {
  if(isProtectedRoute && req.user) {
    return {props:{user:JSON.stringify(req.user)}};
  }
  return redirectUser(res, "/signin");
};

const redirectUser = (res, path) => {
  if (res) {
    res.redirect(302, path);
    res.finished = true;
    return {props:{}};
  }
  Router.replace(path);
  return {props:{}};
};