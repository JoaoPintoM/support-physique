// @flow strict
import React from 'react';
import Helmet from 'react-helmet';
import type { Node as ReactNode } from 'react';
import Header from '../Header/Header';

// import '../../styles/app.css';
// import '../../assets/built/screen.css';
import '../../assets/css/screen.css';

const Layout = ({ children, title, description, isHome, template }) => (
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
      <main id="site-main" class="site-main outer">
        <div class="inner">
          {children}
        </div>
      </main>

      <footer class="site-footer outer">
        <div class="site-footer-content inner">
          <section>
            <p>Stagounet</p>
          </section>
          <nav class="site-footer-nav">
            <a href="/about/">About</a>
          </nav>
        </div>
      </footer>
    </div>
  </div>
);

export default Layout;
