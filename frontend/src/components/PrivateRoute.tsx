interface IProtected {
  children: React.ReactNode;
}

const PrivateRoute: React.FC<IProtected> = ({ children }) => {
  const isAuthenticated = localStorage.getItem("isAuthenticated");

  if (isAuthenticated !== "authenticated") {
    window.location.assign("/login");
  }

  return children;
};

export default PrivateRoute;
