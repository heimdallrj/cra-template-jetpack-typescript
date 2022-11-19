import React from 'react';
import ReactSelect, { Props } from 'react-select';
import { prefix } from '../config';

export default function Select({ options }: Props) {
  return <ReactSelect classNamePrefix={prefix} options={options} />;
}
