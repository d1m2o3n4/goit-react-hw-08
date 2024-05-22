import { NavLink } from "react-router-dom";
import s from "./Navbar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectLoggedIn } from "../../redux/auth/slice";
import { logoutThunk } from "../../redux/auth/operations";
export const Navbar = () => {
  const isLogedIn = useSelector(selectLoggedIn);
  const dispatch = useDispatch();
  return (
    <nav className={s.userNav}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/contacts">Contacts</NavLink>
      {!isLogedIn ? (
        <>
          <NavLink to="/register">Register</NavLink>
          <NavLink to="/login">Login</NavLink>
        </>
      ) : (
        <button onClick={() => dispatch(logoutThunk())}>Logout</button>
      )}
    </nav>
  );
};
