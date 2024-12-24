import { Routes, Route } from "react-router-dom";
import { InitialPage } from "../pages/initial";
export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<InitialPage />} />
      <Route path="/app" element={<>principal</>} />
    </Routes>
  );
};
