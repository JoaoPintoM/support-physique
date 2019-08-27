// @flow strict
import React from 'react';
import moment from 'moment';

type Props = {
  date: string
};

const Meta = ({ date }: Props) => (
  <div>
    <p>Published {moment(date).format('D MMM YYYY')}</p>
  </div>
);

export default Meta;
