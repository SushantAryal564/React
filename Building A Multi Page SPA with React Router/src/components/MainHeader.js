// import { getQueriesForElement } from "@testing-library/react";
import { NavLink } from "react-router-dom";
import classes from "./MainHeader.module.css";
const MainHeader = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/welcome"
              style={({ isActive }) => {
                return {
                  color: isActive && "#95bcf0",
                  paddingBottom: isActive && "0.25rem",
                  borderBottom: isActive && "4px solid #95bcf0",
                };
              }}
            >
              Welcome
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              style={({ isActive }) => {
                return {
                  color: isActive && "#95bcf0",
                  paddingBottom: isActive && "0.25rem",
                  borderBottom: isActive && "4px solid #95bcf0",
                };
              }}
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

/////////OLD CODE When I wrote it don't know///////////////////
// <li>
//   <NavLink
//     // style={({ isActive }) => {
//     //   return { backgroundColor: isActive ? "green" : "" };
//     // }}
//     className={(navData) => (navData.isActive ? "active" : "")}
//     to="/welcome"
//   >
//     Welcome
//   </NavLink>
// </li>
// <li>
//   <NavLink
//     className={(navData) => (navData.isActive ? "active" : "")}
//     // style={({ isActive }) => {
//     //   return { backgroundColor: isActive ? "green" : "" };
//     // }}
//     to="/products"
//   >
//     Products
//   </NavLink>
// </li>
