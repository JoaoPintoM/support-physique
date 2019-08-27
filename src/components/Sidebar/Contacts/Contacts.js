// @flow strict
import React from 'react';
import { getContactHref, getIcon } from '../../../utils';
import Icon from '../../Icon';

type Props = {
  contacts: {
    [string]: string,
  },
};

const Contacts = ({ contacts }: Props) => (
  <div>
    <ul>
      {Object.keys(contacts).map((name) => (!contacts[name] ? null : (
        <li key={name}>
          <a
            href={getContactHref(name, contacts[name])}
            rel="noopener noreferrer"
            target="_blank"
          >
            <Icon name={name} icon={getIcon(name)} />
          </a>
        </li>
      )))}
    </ul>
  </div>
);

export default Contacts;
