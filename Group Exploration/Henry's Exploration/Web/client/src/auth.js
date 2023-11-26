export const isLoggedIn = () => {
  return sessionStorage.getItem('isLoggedIn') === 'true';
};