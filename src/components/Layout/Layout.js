// @flow strict
import React from 'react';
import Helmet from 'react-helmet';
import type { Node as ReactNode } from 'react';
import Header from '../Header/Header';

// import '../../styles/app.css';
// import '../../assets/built/screen.css';
import '../../assets/css/screen.css';
import '../../assets/css/custom.css';

const Layout = ({ children, title, description, isHome, template, isCollection }) => (
  <div className={template}>
    <Helmet>
      <html lang="en" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:site_name" content={title} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
    </Helmet>

    <div className="site-wrapper">
      <Header isHome={isHome} />
      <main id="site-main" className="site-main outer">
        {(() => {
          if (isCollection) {
            return (<div>{children}</div>);
          }
          return (<div className="inner">{children}</div>);
        })()}
      </main>

      <footer className="site-footer outer">
        <div className="site-footer-content inner">
          <section>
            <p>Stagounet</p>
          </section>
          <nav className="site-footer-nav">
            <a href="/about">About</a>
          </nav>
        </div>
      </footer>
    </div>
  </div>
);

export default Layout;
