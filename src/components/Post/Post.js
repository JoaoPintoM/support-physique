// @flow strict
import React from 'react';
import { Link } from 'gatsby';
import Author from './Author';
import Comments from './Comments';
import Content from './Content';
import Meta from './Meta';
import Tags from './Tags';
import type { Node } from '../../types';

type Props = {
  post: Node
};

const Post = ({ post }: Props) => {
  const { html } = post;
  const { tagSlugs, slug } = post.fields;
  const { tags, title, date } = post.frontmatter;

  return (
    <div>
      <Link to="/">Les articles</Link>

      <div>
        <Content body={html} title={title} />
      </div>

      <div>
        <Meta date={date} />
        {tags && tagSlugs && <Tags tags={tags} tagSlugs={tagSlugs} />}
        <Author />
      </div>

      <div>
        <Comments postSlug={slug} postTitle={post.frontmatter.title} />
      </div>
    </div>
  );
};

export default Post;
