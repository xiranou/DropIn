import React, { useState } from 'react';
import NavbarContainer from './NavbarContainer';
import Button from './Button';
import { Link, useRouter } from './../util/router.js';
import { useAuth } from './../util/auth.js';

function Navbar(props) {
  const auth = useAuth();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <NavbarContainer spaced={props.spaced} color={props.color}>
      <div className="container">
        <div className="navbar-brand">
          <div className="navbar-item">
            <Link to="/">
              <img className="image" src={props.logo} alt="Logo" />
            </Link>
          </div>
          <div
            className={'navbar-burger burger' + (menuOpen ? ' is-active' : '')}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
            <span />
          </div>
        </div>
        <div className={'navbar-menu' + (menuOpen ? ' is-active' : '')}>
          <div className="navbar-end">
            <Link className="navbar-item" to="/pricing">
              Pricing
            </Link>

            {auth.user && (
              <>
                <Link className="navbar-item" to="/profile">
                  Profile
                </Link>
                <Link
                  className="navbar-item"
                  to="/signout"
                  onClick={e => {
                    e.preventDefault();
                    auth.signout();
                  }}
                >
                  Sign out
                </Link>
              </>
            )}

            {!auth.user && (
              <>
                <Link className="navbar-item" to="/signin">
                  Sign in
                </Link>
                <div className="navbar-item">
                  <Button
                    parentColor={props.color}
                    size="normal"
                    onClick={() => {
                      router.push('/signup');
                    }}
                  >
                    Sign Up
                  </Button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </NavbarContainer>
  );
}

export default Navbar;
