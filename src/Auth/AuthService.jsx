export const isAuthenticated = () => {
  // Check if the user is authenticated (e.g., by checking for a valid token)
  const token = localStorage.getItem('token');
  return !!token; // Return true if token exists, indicating the user is authenticated
};