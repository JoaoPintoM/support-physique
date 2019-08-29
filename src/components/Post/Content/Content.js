// @flow strict
import React from 'react';

const Content = ({ body }) => (
  <div dangerouslySetInnerHTML={{ __html: body }} />
);

export default Content;
