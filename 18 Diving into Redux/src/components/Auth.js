import classes from "./Auth.module.css";
import { authAction } from "../store/auth";
import { useSelector, useDispatch } from "react-redux";
import UserProfile from "./UserProfile";
const Auth = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const loginHandler = (e) => {
    e.preventDefault();
    dispatch(authAction.login());
  };
  if (isAuthenticated) {
    return <UserProfile />;
  } else {
    return (
      <main className={classes.auth}>
        <section>
          <form onSubmit={loginHandler}>
            <div className={classes.control}>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" />
            </div>
            <div className={classes.control}>
              <label htmlFor="password">Password</label>
              <input type="password" id="password" />
            </div>
            <button>Login</button>
          </form>
        </section>
      </main>
    );
  }
};

export default Auth;
