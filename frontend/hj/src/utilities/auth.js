export const isAuthenticated = () => {
  if (typeof window !== "undefined" && window.localStorage) {
    return localStorage.getItem("token") !== null;
  }
  return false;
};
