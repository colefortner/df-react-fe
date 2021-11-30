import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Users from "./user/pages/Users";
import NewBusiness from "./businesses/pages/NewBusiness";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <MainNavigation />
      <main>
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/businesses/new" element={<NewBusiness />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
