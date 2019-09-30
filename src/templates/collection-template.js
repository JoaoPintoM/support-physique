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
    <Layout title={pageTitle}>
      <Page>
        <div className="row">
          {edges.map((edge) => (
            <div key={edge.node.id} className="column">
              <img src={edge.node.Poster} alt={edge.node.Title}
                width="280px"
                height="400px"
              />
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
