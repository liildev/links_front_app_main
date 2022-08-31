import { Routes, Route } from "react-router-dom";
import CreatePage from "./pages/CreatePage";
import DetailPage from "./pages/DetailPage";
import AuthPage from "./pages/AuthPage";
import LinkPage from "./pages/LinksPage";

export const useRoutes = (isAuthenticated) => {
  if (isAuthenticated) {
    return (
      <Routes>
        <Route path="/" element={<CreatePage />} index />
        <Route path="create" element={<CreatePage />} index />
        <Route path="links" element={<LinkPage />} index />
        <Route path="detail/:id" element={<DetailPage />} index />
      </Routes>
    );
  }

  return (
    <Routes>
      <Route path="/" element={<AuthPage />} index />
      <Route path="*" element={<AuthPage />} />
    </Routes>
  );
};
