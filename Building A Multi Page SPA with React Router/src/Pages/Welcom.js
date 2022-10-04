import { Fragment } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
const Welcome = () => {
  return (
    <Fragment>
      <h1>The Welcome Page</h1>
      <Outlet />
    </Fragment>
  );
};
export default Welcome;
