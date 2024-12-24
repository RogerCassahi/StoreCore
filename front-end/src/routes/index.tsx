import { Routes, Route } from "react-router-dom";
export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<>initial</>} />
      <Route path="/app" element={<>principal</>} />
    </Routes>
  );
};
