import "./App.css";
import { Routes, Route } from "react-router-dom";
import Users from "./user/pages/Users";
import NewBusiness from "./businesses/pages/NewBusiness";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import UserBusinesses from "./businesses/pages/UserBusinesses";
import { BrowserRouter } from "react-router-dom";
import UpdateBusiness from "./businesses/pages/UpdateBusiness";
import Auth from "./user/pages/Auth";
import { AuthContext } from "./shared/context/auth-context";
import { useState, useCallback } from "react";

const App = () => {
  const [token, setToken] = useState(false);
  const [userId, setUserId] = useState(false);

  const login = useCallback((uid, token) => {
    setToken(token);
    setUserId(uid);
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    setUserId(null);
  }, []);

  let routes;

  if (token) {
    routes = (
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/:userId/businesses" element={<UserBusinesses />} />
        <Route path="/businesses/new" element={<NewBusiness />} />
        <Route path="/businesses/:businessId" element={<UpdateBusiness />} />
        <Route path="*" element={<Users />} />
      </Routes>
    );
  } else {
    routes = (
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/:userId/businesses" element={<UserBusinesses />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="*" element={<Auth />} />
      </Routes>
    );
  }

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: !!token,
        token: token,
        userId: userId,
        login: login,
        logout: logout
      }}
    >
      <BrowserRouter>
        <MainNavigation />
        <main>{routes}</main>
      </BrowserRouter>
    </AuthContext.Provider>
  );
};

export default App;
