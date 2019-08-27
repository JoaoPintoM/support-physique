// @flow strict
import React from 'react';
import Helmet from 'react-helmet';
import type { Node as ReactNode } from 'react';

// import '../../styles/app.css';

type Props = {
  children: ReactNode,
  title: string,
  description?: string
};

const Layout = ({ children, title, description }: Props) => (
  <div>
    <Helmet>
      <html lang="en" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:site_name" content={title} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
    </Helmet>

    <div className="viewport">
      <div className="viewport-top">
        {/* The main header section on top of the screen */}
        <header className="site-head">
          <div className="container">
            <div className="site-mast">
              <div className="site-mast-left"></div>
              <div className="site-mast-right"></div>
            </div>
            <nav className="site-nav"></nav>
          </div>
        </header>

        <main className="site-main">
          {/* All the main content gets inserted here, index.js, post.js */}
          {children}
        </main>
      </div>

      <div className="viewport-bottom">
        {/* The footer at the very bottom of the screen */}
        <footer className="site-foot">
          <div className="site-foot-nav container">
            <div className="site-foot-nav-left"></div>
            <div className="site-foot-nav-right"></div>
          </div>
        </footer>
      </div>
    </div>
  </div>
);

export default Layout;
