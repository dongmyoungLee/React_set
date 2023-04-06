import { Fragment } from 'react';
import classes from './Header.module.css';
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
    return (
        <Fragment>
          <header className={classes.header} >
            <h1>보승회관</h1>
            <HeaderCartButton onClick={props.onModalShow} />
          </header>
          <div className={classes["main-image"]}>
            {/*<img src={mealsImg} alt="보승" />*/}
          </div>
        </Fragment>
    );
}

export default Header;