import classes from './Header.module.css';
import {useDispatch, useSelector} from "react-redux";
import {authAction} from "../store/auth";

const Header = () => {
  const isAuth = useSelector(state => state.auth.isAuthenticated);
  const dispath = useDispatch();

  const logoutHandler = (e) => {
    dispath(authAction.logout());
  }

  const showNavMenu = isAuth && <nav>
                                  <ul>
                                    <li>
                                      <a href='/'>My Products</a>
                                    </li>
                                    <li>
                                      <a href='/'>My Sales</a>
                                    </li>
                                    <li>
                                      <button onClick={logoutHandler}>Logout</button>
                                    </li>
                                  </ul>
                                </nav>;

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {showNavMenu}
    </header>
  );
};

export default Header;
