// @flow strict
import React from 'react';
import { withPrefix, Link } from 'gatsby';

type Props = {
  author: {
    name: string,
    bio: string,
    photo: string
  },
  isIndex: ?boolean
};

const Author = ({ author, isIndex }: Props) => (
  <div>
    <Link to="/">
      <img
        src={withPrefix(author.photo)}
        width="75"
        height="75"
        alt={author.name}
      />
    </Link>

    { isIndex === true ? (
      <h1>
        <Link to="/">{author.name}</Link>
      </h1>
    ) : (
      <h2>
        <Link to="/">{author.name}</Link>
      </h2>
    )}
    <p>{author.bio}</p>
  </div>
);

export default Author;
