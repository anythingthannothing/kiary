const BASE_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:8001'
    : 'http://localhost:80';

const AUTH_URL = BASE_URL + '/auth';

export const endPoints = {
  auth: {
    SIGN_UP_URL: AUTH_URL,
    CHECK_EMAIL_URL: AUTH_URL + '/check-email',
    CHECK_NICKNAME_URL: AUTH_URL + '/check-nickname',
    LOGIN_URL: AUTH_URL + '/login',
    VERIFY_URL: AUTH_URL + '/verify',
    REFRESH_URL: AUTH_URL + '/refresh',
    LOGOUT_URL: AUTH_URL + '/logout',
  },
};
