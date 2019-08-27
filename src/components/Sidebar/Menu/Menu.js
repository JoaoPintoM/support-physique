// @flow strict
import React from 'react';
import { Link } from 'gatsby';

type Props = {
  menu: {
    label: string,
    path: string
  }[]
};

const Menu = ({ menu }: Props) => (
  <nav>
    <ul>
      {menu.map((item) => (
        <li key={item.path}>
          <Link
            to={item.path}
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);

export default Menu;
