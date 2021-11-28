import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Users from "./user/pages/Users";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Users />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default App;
