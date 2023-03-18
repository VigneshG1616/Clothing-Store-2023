import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";
import CartIcon from "../../components/CartIcon/CartIcon.component";
import CartDropdown from "../../components/CartDropdown/CartDropdown.component";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import "./Navigation.styles.scss";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isDropdownOn } = useContext(CartContext);
  const handleSignOut = async () => {
    await signOutUser();
  };

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <Logo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={handleSignOut}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/userauth">
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
        {isDropdownOn && <CartDropdown />}
      </div>

      <Outlet />
    </Fragment>
  );
};

export default Navigation;
