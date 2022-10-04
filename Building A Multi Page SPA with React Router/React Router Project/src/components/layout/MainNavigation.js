import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";
const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Great Quotes</div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink
              to="/quotes"
              style={({ isActive }) => {
                return { color: isActive && "#e6fcfc" };
              }}
            >
              All Quotes
            </NavLink>
            <NavLink
              to="/new-quote"
              style={({ isActive }) => {
                return { color: isActive && "#e6fcfc" };
              }}
            >
              Add a Quote
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default MainNavigation;
