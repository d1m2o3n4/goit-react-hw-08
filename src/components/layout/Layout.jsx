import { Navbar } from "../navbar/Navbar";
import { Outlet } from "react-router-dom";
import s from "./Layout.module.css";
import { useSelector } from "react-redux";
import { selectLoggedIn, selectUserName } from "../../redux/auth/slice";
export const Layout = () => {
  const userName = useSelector(selectUserName);
  const isLogedIn = useSelector(selectLoggedIn);
  return (
    <div>
      <header className={s.layoutWrapper}>
        <h2>Contact Book</h2>
        {isLogedIn ? <p>Hello, {userName}</p> : ""}
        <Navbar />
      </header>

      <Outlet />
    </div>
  );
};
