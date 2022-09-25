import { getQueriesForElement } from "@testing-library/react";
import { NavLink } from "react-router-dom";
import classes from "./MainHeader.module.css";
const MainHeader = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <NavLink
              // style={({ isActive }) => {
              //   return { backgroundColor: isActive ? "green" : "" };
              // }}
              className={(navData) => (navData.isActive ? "active" : "")}
              to="/welcome"
            >
              Welcome
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? "active" : "")}
              // style={({ isActive }) => {
              //   return { backgroundColor: isActive ? "green" : "" };
              // }}
              to="/products"
            >
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default MainHeader;
