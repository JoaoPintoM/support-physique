// @flow strict
import React from 'react';
import { Link } from 'gatsby';

type Props = {
  tags: string[],
  tagSlugs: string[]
};

const Tags = ({ tags, tagSlugs }: Props) => (
  <div>
    <ul>
      {tagSlugs && tagSlugs.map((slug, i) => (
        <li key={tags[i]}>
          <Link to={slug}>
            {tags[i]}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default Tags;
