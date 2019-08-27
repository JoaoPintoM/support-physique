// @flow strict
import React from 'react';

type Props = {
  copyright: string
};

const Copyright = ({ copyright }: Props) => (
  <div>
    {copyright}
  </div>
);

export default Copyright;
