// @flow strict
import React from 'react';
import Helmet from 'react-helmet';
import type { Node as ReactNode } from 'react';

// import '../../styles/app.css';
import '../../assets/built/screen.css';

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

    <div className="site-wrapper">
      <header className="site-header outer responsive-header-img">
        <div class="inner">
          <div class="site-header-content">
            <h1 class="site-title">Angristan's blog</h1>
            <h2 class="site-description">Dev &amp; Ops</h2>
          </div>
          <nav class="site-nav">
            <div class="site-nav-left">
              <ul class="nav" role="menu">
                <li class="nav-home nav-current" role="menuitem">
                  <a href="https://angristan.xyz/">Home</a>
                </li>
                <li class="nav-french-blog" role="menuitem">
                  <a href="https://angristan.fr/">French Blog</a>
                </li>
                <li class="nav-public-services" role="menuitem">
                  <a href="https://angristan.xyz/public-services/">Public Services</a>
                </li>
                <li class="nav-about" role="menuitem">
                  <a href="https://angristan.xyz/about/">About</a>
                </li>
              </ul>
            </div>
            <div class="site-nav-right">
              <div class="social-links">
                <a
                  class="social-link social-link-tw"
                  href="https://twitter.com/fuolpit"
                  title="Twitter"
                  target="_blank"
                  rel="noopener"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                    <path d="M30.063 7.313c-.813 1.125-1.75 2.125-2.875 2.938v.75c0 1.563-.188 3.125-.688 4.625a15.088 15.088 0 0 1-2.063 4.438c-.875 1.438-2 2.688-3.25 3.813a15.015 15.015 0 0 1-4.625 2.563c-1.813.688-3.75 1-5.75 1-3.25 0-6.188-.875-8.875-2.625.438.063.875.125 1.375.125 2.688 0 5.063-.875 7.188-2.5-1.25 0-2.375-.375-3.375-1.125s-1.688-1.688-2.063-2.875c.438.063.813.125 1.125.125.5 0 1-.063 1.5-.25-1.313-.25-2.438-.938-3.313-1.938a5.673 5.673 0 0 1-1.313-3.688v-.063c.813.438 1.688.688 2.625.688a5.228 5.228 0 0 1-1.875-2c-.5-.875-.688-1.813-.688-2.75 0-1.063.25-2.063.75-2.938 1.438 1.75 3.188 3.188 5.25 4.25s4.313 1.688 6.688 1.813a5.579 5.579 0 0 1 1.5-5.438c1.125-1.125 2.5-1.688 4.125-1.688s3.063.625 4.188 1.813a11.48 11.48 0 0 0 3.688-1.375c-.438 1.375-1.313 2.438-2.563 3.188 1.125-.125 2.188-.438 3.313-.875z"></path>
                  </svg>
                </a>
                <a
                  rel="me"
                  class="social-link social-link-ms"
                  href="https://mstdn.io/@angristan"
                  target="_blank"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 216.4144 232.00976">
                    <path
                      d="M107.86523 0C78.203984.2425 49.672422 3.4535937 33.044922 11.089844c0 0-32.97656262 14.752031-32.97656262 65.082031 0 11.525-.224375 25.306175.140625 39.919925 1.19750002 49.22 9.02375002 97.72843 54.53124962 109.77343 20.9825 5.55375 38.99711 6.71547 53.505856 5.91797 26.31125-1.45875 41.08203-9.38867 41.08203-9.38867l-.86914-19.08984s-18.80171 5.92758-39.91796 5.20508c-20.921254-.7175-43.006879-2.25516-46.390629-27.94141-.3125-2.25625-.46875-4.66938-.46875-7.20313 0 0 20.536953 5.0204 46.564449 6.21289 15.915.73001 30.8393-.93343 45.99805-2.74218 29.07-3.47125 54.38125-21.3818 57.5625-37.74805 5.0125-25.78125 4.59961-62.916015 4.59961-62.916015 0-50.33-32.97461-65.082031-32.97461-65.082031C166.80539 3.4535938 138.255.2425 108.59375 0h-.72852zM74.296875 39.326172c12.355 0 21.710234 4.749297 27.896485 14.248047l6.01367 10.080078 6.01563-10.080078c6.185-9.49875 15.54023-14.248047 27.89648-14.248047 10.6775 0 19.28156 3.753672 25.85156 11.076172 6.36875 7.3225 9.53907 17.218828 9.53907 29.673828v60.941408h-24.14454V81.869141c0-12.46875-5.24453-18.798829-15.73828-18.798829-11.6025 0-17.41797 7.508516-17.41797 22.353516v32.375002H96.207031V85.423828c0-14.845-5.815468-22.353515-17.417969-22.353516-10.49375 0-15.740234 6.330079-15.740234 18.798829v59.148439H38.904297V80.076172c0-12.455 3.171016-22.351328 9.541015-29.673828 6.568751-7.3225 15.172813-11.076172 25.851563-11.076172z"
                      fill="#fff"
                    ></path>
                  </svg>
                </a>
                <a
                  class="social-link social-link-gh"
                  href="https://github.com/Angristan"
                  target="_blank"
                  rel="noopener"
                >
                  <svg viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z"
                      fill="#fff"
                    ></path>
                  </svg>
                </a>
                <a
                  class="social-link social-link-sh"
                  href="https://links.angristan.xyz"
                  target="_blank"
                  rel="noopener"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1536 1792">
                    <path
                      d="M877.745 128c161.027 0 253.695 159.492 278.001 478.507h66.062c287.114 44.053 429.182 135.232 426.143 273.471 24.306 162.547-79.767 237.736-312.192 225.584 177.737 156.468 241.523 302.32 191.392 437.52-39.498 107.859-133.657 143.562-282.53 107.102-164.066-82.031-280.287-176.246-348.65-282.585h-43.303c-63.804 188.371-187.59 282.586-371.405 282.586h-63.797c-153.43-47.093-208.905-139.762-166.37-278.002l79.76-221.052H308.1C83.27 1119.229-18.51 1019.74 2.757 852.637 8.832 699.206 162.995 621.724 465.3 620.205c83.551-9.115 118.51-35.706 104.838-79.76C570.138 265.484 672.663 128 877.745 128zM829.69 354.08c-55.987-3.65-83.227 72.17-81.804 227.405l-4.582 127.594c-4.56 63.804-25.075 95.669-61.534 95.669l-360.026 20.546c-56.207 1.52-84.29 24.274-84.29 68.328 0 42.535 30.374 65.343 91.14 68.382 211.156-10.635 309.9 3.807 296.228 43.304l-63.797 136.708c-107.858 162.547-134.449 258.252-79.76 287.115 72.917 44.055 176.19-69.875 309.872-341.797 31.9-28.864 58.492-28.864 79.76 0 94.185 100.261 171.667 182.271 232.432 246.074 62.284 63.804 112.428 82.828 150.406 57.003 45.574-48.612 33.424-101.048-36.455-157.255-68.361-57.727-146.587-136.7-234.696-236.961-9.115-33.422-6.878-50.155 6.794-50.155 297.747 19.748 440.56.778 428.407-56.948 9.115-63.803-120.003-95.722-387.368-95.722-41.016 7.595-74.428-2.262-100.252-29.607V540.445c0-124.569-29.63-186.117-88.875-184.597a69.654 69.654 0 0 0-11.598-1.768z"
                      color="#000"
                    ></path>
                  </svg>
                </a>
              </div>
              <a
                class="rss-button"
                href="https://angristan.xyz/rss/"
                title="RSS"
                target="_blank"
                rel="noopener"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <circle cx="6.18" cy="17.82" r="2.18"></circle>
                  <path d="M4 4.44v2.83c7.03 0 12.73 5.7 12.73 12.73h2.83c0-8.59-6.97-15.56-15.56-15.56zm0 5.66v2.83c3.9 0 7.07 3.17 7.07 7.07h2.83c0-5.47-4.43-9.9-9.9-9.9z"></path>
                </svg>
              </a>
            </div>
          </nav>
        </div>
      </header>

      <main id="site-main" class="site-main outer">
        <div class="inner">
        {children}
          
        </div>
      </main>

      <footer class="site-footer outer">
        <div class="site-footer-content inner">
          <section>
            Powered by <a href="https://www.vultr.com/?ref=6879746">Vultr Cloud 🚀</a>
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
