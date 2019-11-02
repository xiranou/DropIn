import React from 'react';

function NavbarContainer(props) {
  return (
    <nav
      style={{ backgroundColor: 'transparent' }}
      id="navbar"
      className={
        'navbar is-transparent' +
        (props.color ? ` is-${props.color}` : '') +
        (props.spaced ? ' is-spaced' : '')
      }
    >
      {props.children}
    </nav>
  );
}

export default NavbarContainer;
