// @flow strict
import React from 'react';
import moment from 'moment';
import { Link } from 'gatsby';
import type { Edges } from '../../types';

moment.locale('fr');

type Props = {
  edges: Edges
};

const Feed = ({ edges }: Props) => (
  <div>
    {edges.map((edge) => (
      <div key={edge.node.fields.slug}>
        <div>
          <time dateTime={moment(edge.node.frontmatter.date).format('MMMM D, YYYY')}>
            {moment(edge.node.frontmatter.date).format('MMMM YYYY')}
          </time>
          <span />
          <span >
            <Link to={edge.node.fields.categorySlug}>{edge.node.frontmatter.category}</Link>
          </span>
        </div>
        <h2 >
          <Link to={edge.node.fields.slug}>{edge.node.frontmatter.title}</Link>
        </h2>
        <p>{edge.node.frontmatter.description}</p>
        <Link to={edge.node.fields.slug}>Lire</Link>
      </div>
    ))}
  </div>
);

export default Feed;
