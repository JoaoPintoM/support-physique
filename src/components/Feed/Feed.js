// @flow strict
import React from 'react';
import moment from 'moment';
import { Link } from 'gatsby';

const Feed = ({ edges }) => (
  <div className="post-feed">
    {edges.map((edge, index) => (
      <article key={edge.node.fields.slug} className={`post-card post  ${(index === 0 ? 'post-card-large' : '')}`}>
        <Link to={`${edge.node.fields.slug}.html`} className="post-card-image-link">
          <img
            className="post-card-image"
            //     srcset="https://angristan.xyz/content/images/size/w300/2019/08/ghost-nginx.png 300w,
            // https://angristan.xyz/content/images/size/w600/2019/08/ghoszt-nginx.png 600w,
            // https://angristan.xyz/content/images/size/w1000/2019/08/ghost-nginx.png 1000w,
            //           /content/images/size/w2000/2019/08/ghost-nginx.png 2000w"
            sizes="(max-width: 1000px) 400px, 700px"
            src={edge.node.frontmatter.image}
            alt={edge.node.frontmatter.title}
          />
        </Link>
        <div className="post-card-content">
          <Link to={`${edge.node.fields.slug}.html`} className="post-card-content-link">
            <header className="post-card-header">
              <span className="post-card-tags">{edge.node.frontmatter.category}</span>
              <h2 className="post-card-title">{edge.node.frontmatter.title}</h2>
            </header>
            <section className="post-card-excerpt">
              <p>{edge.node.frontmatter.description}</p>
            </section>
          </Link>
          <footer className="post-card-meta">
            <ul className="author-list">
              <li className="author-list-item">
                <div className="author-name-tooltip">Joao</div>
                <a href="/author/angristan/" className="static-avatar">
                  <img
                    className="author-profile-image"
                    src="/photo.jpg"
                    alt="Picture of Stagounet"
                  />
                </a>
              </li>
            </ul>
            <time
              className="reading-time"
              dateTime={moment(edge.node.frontmatter.date).format('YYYY-MM-DD')}
            >
              {moment(edge.node.frontmatter.date).format('DD MMMM YYYY')}
            </time>
          </footer>
        </div>
      </article>
    ))}
  </div>

  // <article className="post-card post tag-sysadmin tag-linux tag-ghost-tag post-card-large">
  //   <a className="post-card-image-link" href="/ghost-nginx-cache/">
  //     <img
  //       className="post-card-image"
  //       srcset="https://angristan.xyz/content/images/size/w300/2019/08/ghost-nginx.png 300w,
  //       https://angristan.xyz/content/images/size/w600/2019/08/ghost-nginx.png 600w,
  //       https://angristan.xyz/content/images/size/w1000/2019/08/ghost-nginx.png 1000w,
  //                 /content/images/size/w2000/2019/08/ghost-nginx.png 2000w"
  //       sizes="(max-width: 1000px) 400px, 700px"
  //       src="/content/images/size/w600/2019/08/ghost-nginx.png"
  //       alt="Caching Ghost with Nginx"
  //     />
  //   </a>
  //   <div className="post-card-content">
  //     <a className="post-card-content-link" href="/ghost-nginx-cache/">
  //       <header className="post-card-header">
  //         <span className="post-card-tags">SysAdmin</span>
  //         <h2 className="post-card-title">Caching Ghost with Nginx</h2>
  //       </header>
  //       <section className="post-card-excerpt">
  //         <p>Make you Ghost website faster and handle more requests with Nginx cache!</p>
  //       </section>
  //     </a>
  //     <footer className="post-card-meta">
  //       <ul className="author-list">
  //         <li className="author-list-item">
  //           <div className="author-name-tooltip">Stanislas (angristan)</div>
  //           <a href="/author/angristan/" className="static-avatar">
  //             <img
  //               className="author-profile-image"
  //               src="/content/images/size/w100/2018/12/200stan.jpg"
  //               alt="Stanislas (angristan)"
  //             />
  //           </a>
  //         </li>
  //       </ul>
  //       <time className="reading-time" datetime="2019-08-26">
  //         26 August 2019
  //       </time>
  //     </footer>
  //   </div>
  // </article>
);

export default Feed;
