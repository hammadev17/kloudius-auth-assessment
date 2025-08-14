export const LocalStorageKeys = {
  user: 'user',
  userToken: 'user_token',
};

export const validateEmail = email => {
  const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  return regex.test(email);
};
