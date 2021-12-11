import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Users from "./user/pages/Users";
import NewBusiness from "./businesses/pages/NewBusiness";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import UserBusinesses from "./businesses/pages/UserBusinesses";
import { BrowserRouter } from "react-router-dom";
import UpdateBusiness from "./businesses/pages/UpdateBusiness";
import Auth from "./user/pages/Auth";

const App = () => {
  return (
    <BrowserRouter>
      <MainNavigation />
      <main>
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/:userId/businesses" element={<UserBusinesses />} />
          <Route path="/businesses/new" element={<NewBusiness />} />
          <Route path="/businesses/:businessId" element={<UpdateBusiness />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
