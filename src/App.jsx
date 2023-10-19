import { Route, Routes } from "react-router-dom";
import { ApplicationViews } from "./views/ApplicationView";

export const App = () => {
  return (
    <Routes>
      <Route path="*" element={<ApplicationViews />} />
    </Routes>
  );
};
