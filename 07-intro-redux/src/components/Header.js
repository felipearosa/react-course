import { useDispatch, useSelector } from 'react-redux';
import classes from './Header.module.css';
import { authActions } from '../store/auth';

const Header = () => {
  const dispatch  = useDispatch();
  const isUserAuthenticated = useSelector(state => state.auth.isAuthenticated);

  const logUserOut = () => {
    dispatch(authActions.logout());
  }


  const headerOptions = (
    <ul>
      <li>
        <a href='/'>My Products</a>
      </li>
      <li>
        <a href='/'>My Sales</a>
      </li>
      <li>
        <button onClick={logUserOut}>Logout</button>
      </li>
    </ul>
  )

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        {isUserAuthenticated && headerOptions}
      </nav>
    </header>
  );
};

export default Header;
