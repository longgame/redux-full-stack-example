export const POST_LOGIN = 'POST_LOGIN';
export function login(email, password) {
  return {
    type: POST_LOGIN,
    timestamp: Date.now(),
    email,
    password
  };
}

export const POST_REGISTER = 'POST_REGISTER';
export function register(email, password) {
  return {
    type: POST_REGISTER,
    timestamp: Date.now(),
    email,
    password
  };
}
