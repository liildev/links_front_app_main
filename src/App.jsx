import React from "react";
import { useRoutes } from "./routes";
import { AuthContext } from "./context/AuthContext";
import { Container } from "./styles/Container";
import { useAuth } from "./hooks/auth.hook";
import Global from "./styles/Global";
import Navbar from "./components/Navbar";
import { Loader } from "./components/Loader";

function App() {
  const { login, logout, token, userId, ready } = useAuth();
  const isAuthenticated = !!token;

  const routes = useRoutes(isAuthenticated);

  if (!ready) {
    return <Loader />;
  }

  return (
    <AuthContext.Provider value={{ login, logout, token, userId }}>
      <Global />
      {isAuthenticated && <Navbar />}
      <Container>{routes}</Container>
    </AuthContext.Provider>
  );
}

export default App;
