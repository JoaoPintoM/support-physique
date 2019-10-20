// @flow strict
import React from 'react';
import moment from 'moment';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';
import Page from '../components/Page';

const CollectionTemplate = ({ data }) => {
  const { edges } = data.allMovieCollectionJson;
  const pageTitle = 'Ma Collection';

  return (
    <Layout title={pageTitle} isCollection={true} >
      <Page>
        <div className="row">
          {edges.map((edge) => (
            <div key={edge.node.id} className="column">
              <img src={edge.node.Poster} alt={edge.node.Title}
                width="280px"
                height="400px"
              />


          <div className="post-card-content">
            <header className="post-card-header">
              {/* <span className="post-card-tags">test</span> */}
              <h2
                className="post-card-title"
                style={{ marginTop: '20px' }} >{edge.node.Title}</h2>
            </header>
            {/* <section className="post-card-excerpt">
              <p>test test</p>
            </section> */}
        </div>
              
            </div>
          ))}
        </div>
      </Page>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMovieCollectionJson {
      edges {
        node {
          id
          Title
          Genre
          Poster
          Director
          Year
          Country
          Released
          Runtime
        }
      }
    }
  }
`;

export default CollectionTemplate;
