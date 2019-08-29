// @flow strict
import React from 'react';
import { Link } from 'gatsby';

const HeaderMenu = () => (
  <div className="site-nav-left">
    <ul className="nav" role="menu">
      <li className="nav-home nav-current" role="menuitem">
        <Link to="/">Home</Link>
      </li>
      <li className="nav-french-blog" role="menuitem">
        <Link to="/category/critique-cine">Critique Ciné</Link>
      </li>
    </ul>
  </div>
);

export default HeaderMenu;
