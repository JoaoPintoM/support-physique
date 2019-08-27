// @flow strict
import React from 'react';
import Author from './Author';
import Contacts from './Contacts';
import Copyright from './Copyright';
import Menu from './Menu';
import { useSiteMetadata } from '../../hooks';

type Props = {
  isIndex?: boolean,
};

const Sidebar = ({ isIndex }: Props) => {
  const { author, copyright, menu } = useSiteMetadata();

  return (
    <div>
      <div>
        <Author author={author} isIndex={isIndex} />
        {/* <Menu menu={menu} /> */}
        <Contacts contacts={author.contacts} />
        <Copyright copyright={copyright} />
      </div>
    </div>
  );
};

export default Sidebar;
