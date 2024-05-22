import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Layout } from "./components/layout/Layout";
import { HomePage } from "./pages/HomePage";
import { ContactsPage } from "./pages/ContactsPage";
import { RegistrationPage } from "./pages/RegistrationPage";
import { LoginPage } from "./pages/LoginPage";
import { ErrorPage } from "./pages/ErrorPage";
import { PrivateRoute } from "./routes/PrivateRoute";
import { PublicRoute } from "./routes/PublicRoute";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { refreshThunk } from "./redux/auth/operations";
import { selectIsRefreshing } from "./redux/auth/slice";

const App = () => {
  const dispatch = useDispatch();
  const isRefresh = useSelector(selectIsRefreshing);
  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);
  return isRefresh ? (
    ""
  ) : (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Layout />
          </PrivateRoute>
        }
      >
        <Route index element={<HomePage />} />
        <Route path="contacts" element={<ContactsPage />} />
      </Route>
      <Route
        path="register"
        element={
          <PublicRoute>
            <RegistrationPage />
          </PublicRoute>
        }
      />
      <Route
        path="login"
        element={
          <PublicRoute>
            <LoginPage />
          </PublicRoute>
        }
      />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};
export default App;
