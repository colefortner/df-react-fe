import "./App.css";
import { Routes, Route } from "react-router-dom";
// import Users from "./user/pages/Users";
// import NewBusiness from "./businesses/pages/NewBusiness";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
// import UserBusinesses from "./businesses/pages/UserBusinesses";
import { BrowserRouter } from "react-router-dom";
import LoadingSpinner from "./shared/components/UIElements/LoadingSpinner";
// import UpdateBusiness from "./businesses/pages/UpdateBusiness";
// import Auth from "./user/pages/Auth";
import { AuthContext } from "./shared/context/auth-context";
import { useState, useCallback, useEffect, Suspense } from "react";
import React from "react";

const Users = React.lazy(() => import("./user/pages/Users"));
const NewBusiness = React.lazy(() => import("./businesses/pages/NewBusiness"));
const UserBusinesses = React.lazy(() =>
  import("./businesses/pages/UserBusinesses")
);
const UpdateBusiness = React.lazy(() =>
  import("./businesses/pages/UpdateBusiness")
);
const Auth = React.lazy(() => import("./user/pages/Auth"));

let logoutTimer;

const App = () => {
  const [token, setToken] = useState(false);
  const [tokenExpirationDate, setTokenExpirationDate] = useState();
  const [userId, setUserId] = useState(false);

  const login = useCallback((uid, token, expirationDate) => {
    setToken(token);
    setUserId(uid);
    const tokenExpirationDate =
      expirationDate || new Date(new Date().getTime() + 1000 * 60 * 60);
    setTokenExpirationDate(tokenExpirationDate);
    localStorage.setItem(
      "userData",
      JSON.stringify({
        userId: uid,
        token: token,
        expiration: tokenExpirationDate.toISOString()
      })
    );
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    setTokenExpirationDate(null);
    setUserId(null);
    localStorage.removeItem("userData");
  }, []);

  useEffect(() => {
    if (token && tokenExpirationDate) {
      const remainingTime =
        tokenExpirationDate.getTime() - new Date().getTime();
      logoutTimer = setTimeout(logout, remainingTime);
    } else {
      clearTimeout(logoutTimer);
    }
  }, [token, logout, tokenExpirationDate]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("userData"));
    if (
      storedData &&
      storedData.token &&
      new Date(storedData.expiration) > new Date()
    ) {
      login(
        storedData.userId,
        storedData.token,
        new Date(storedData.expiration)
      );
    }
  }, [login]);

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
        <main>
          <Suspense
            fallback={
              <div className="center">
                <LoadingSpinner />
              </div>
            }
          >
            {routes}
          </Suspense>
        </main>
      </BrowserRouter>
    </AuthContext.Provider>
  );
};

export default App;
