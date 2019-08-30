// @flow strict
import React from 'react';
import { Link } from 'gatsby';
import moment from 'moment';
import Author from './Author';
import Comments from './Comments';
import Content from './Content';
import Meta from './Meta';
import Tags from './Tags';

const Post = ({ post }) => {
  const { html } = post;
  const { tagSlugs, slug, categorySlug } = post.fields;
  const { tags, title, date } = post.frontmatter;

  return (
    <article className="post-full">
      {/* <Link to="/">Les articles</Link> */}

      <header className="post-full-header">
        <section className="post-full-meta">
          <time
            className="post-full-meta-date"
            dateTime={moment(post.frontmatter.date).format('YYYY-MM-DD')}
          >
            {moment(post.frontmatter.date).format('DD MMMM YYYY')}
          </time>
          <span className="date-divider">/</span>{' '}
          <a href={categorySlug}>{post.frontmatter.category}</a>
        </section>
        <h1 className="post-full-title">{post.frontmatter.title}</h1>
      </header>

      {/* <div>
        <Content body={html} title={title} />
      </div> */}

      <section className="post-full-content">
        <div className="post-content">
          {/* <p>I'm tired of reading countless of tutorials about this, many of which include a <em>lot</em> of unnecessary steps and do not work on all platform.</p><p>To put an end to this, I published a repo: <a href="https://github.com/angristan/php-xdebug-docker">php-xdebug-docker</a> with everything that is necessary to get Xdebug to work with VS Code and PhpStorm when running the PHP code inside a Docker container, including a tutorial for both editors.</p><p>The <code>Dockerfile</code> is based on the <code>php:7-apache</code> image. It installs and configure Xdebug. The most important parameters are <code>xdebug.remote_host</code> and <code>xdebug.idekey</code>, which I commented inside the <code>Dockerfile</code>.</p><p>I included a <code>docker-compose.yml</code> so you can inspire yourself from it, but also get and up in running easily to make sure everything works.</p> */}

          <Content body={html} title={title} />
        </div>
      </section>

      <div>
        <Meta date={date} />
        {tags && tagSlugs && <Tags tags={tags} tagSlugs={tagSlugs} />}
        <Author />
      </div>


      <div>
        <Comments postSlug={slug} postTitle={post.frontmatter.title} />
      </div>
    </article>
  );
};

export default Post;
