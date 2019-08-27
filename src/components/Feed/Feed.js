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
  // <article class="post-card post tag-sysadmin tag-linux tag-ghost-tag post-card-large">
  //   <a class="post-card-image-link" href="/ghost-nginx-cache/">
  //     <img
  //       class="post-card-image"
  //       srcset="https://angristan.xyz/content/images/size/w300/2019/08/ghost-nginx.png 300w,
  //       https://angristan.xyz/content/images/size/w600/2019/08/ghost-nginx.png 600w,
  //       https://angristan.xyz/content/images/size/w1000/2019/08/ghost-nginx.png 1000w,
  //                 /content/images/size/w2000/2019/08/ghost-nginx.png 2000w"
  //       sizes="(max-width: 1000px) 400px, 700px"
  //       src="/content/images/size/w600/2019/08/ghost-nginx.png"
  //       alt="Caching Ghost with Nginx"
  //     />
  //   </a>
  //   <div class="post-card-content">
  //     <a class="post-card-content-link" href="/ghost-nginx-cache/">
  //       <header class="post-card-header">
  //         <span class="post-card-tags">SysAdmin</span>
  //         <h2 class="post-card-title">Caching Ghost with Nginx</h2>
  //       </header>
  //       <section class="post-card-excerpt">
  //         <p>Make you Ghost website faster and handle more requests with Nginx cache!</p>
  //       </section>
  //     </a>
  //     <footer class="post-card-meta">
  //       <ul class="author-list">
  //         <li class="author-list-item">
  //           <div class="author-name-tooltip">Stanislas (angristan)</div>
  //           <a href="/author/angristan/" class="static-avatar">
  //             <img
  //               class="author-profile-image"
  //               src="/content/images/size/w100/2018/12/200stan.jpg"
  //               alt="Stanislas (angristan)"
  //             />
  //           </a>
  //         </li>
  //       </ul>
  //       <time class="reading-time" datetime="2019-08-26">
  //         26 August 2019
  //       </time>
  //     </footer>
  //   </div>
  // </article>

  <div class="post-feed">
    {edges.map((edge) => (
      <article
        key={edge.node.fields.slug}
        class="post-card post"
      >
        <a class="post-card-image-link" href="/ghost-nginx-cache/">
          <img
            class="post-card-image"
            srcset="https://angristan.xyz/content/images/size/w300/2019/08/ghost-nginx.png 300w,
        https://angristan.xyz/content/images/size/w600/2019/08/ghost-nginx.png 600w,
        https://angristan.xyz/content/images/size/w1000/2019/08/ghost-nginx.png 1000w,
                  /content/images/size/w2000/2019/08/ghost-nginx.png 2000w"
            sizes="(max-width: 1000px) 400px, 700px"
            src="/content/images/size/w600/2019/08/ghost-nginx.png"
            alt="Caching Ghost with Nginx"
          />
        </a>
        <div class="post-card-content">
          <a class="post-card-content-link" href="/ghost-nginx-cache/">
            <header class="post-card-header">
              <span class="post-card-tags">{edge.node.frontmatter.category}</span>
              <h2 class="post-card-title">{edge.node.frontmatter.title}</h2>
            </header>
            <section class="post-card-excerpt">
              <p>Make you Ghost website faster and handle more requests with Nginx cache!</p>
            </section>
          </a>
          <footer class="post-card-meta">
            <ul class="author-list">
              <li class="author-list-item">
                <div class="author-name-tooltip">Stanislas (angristan)</div>
                <a href="/author/angristan/" class="static-avatar">
                  <img
                    class="author-profile-image"
                    src="/content/images/size/w100/2018/12/200stan.jpg"
                    alt="Stanislas (angristan)"
                  />
                </a>
              </li>
            </ul>
            <time class="reading-time" datetime={moment(edge.node.frontmatter.date).format('YYYY-MM-DD')}>
              {moment(edge.node.frontmatter.date).format('DD MMMM YYYY')}
            </time>
          </footer>
        </div>
      </article>
    ))}
  </div>
  // <div>
  //   {edges.map((edge) => (
  //     <div key={edge.node.fields.slug}>
  //       <div>
  //         <time dateTime={moment(edge.node.frontmatter.date).format('MMMM D, YYYY')}>
  //           {moment(edge.node.frontmatter.date).format('MMMM YYYY')}
  //         </time>
  //         <span />
  //         <span >
  //           <Link to={edge.node.fields.categorySlug}>{edge.node.frontmatter.category}</Link>
  //         </span>
  //       </div>
  //       <h2 >
  //         <Link to={edge.node.fields.slug}>{edge.node.frontmatter.title}</Link>
  //       </h2>
  //       <p>{edge.node.frontmatter.description}</p>
  //       <Link to={edge.node.fields.slug}>Lire</Link>
  //     </div>
  //   ))}
  // </div>
);

export default Feed;
