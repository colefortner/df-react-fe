import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Users from "./user/pages/Users";
import NewBusiness from "./businesses/pages/NewBusiness";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Users />} />
      <Route path="/businesses/new" element={<NewBusiness />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default App;
