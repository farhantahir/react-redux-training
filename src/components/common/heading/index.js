import React from 'react';
import { oneOf, node, string } from 'prop-types';

const Heading = ({ children, as: Component, className }) => {
  return <>
      <Component className={className}>{children}</Component>
  </>;
};

Heading.propTypes = {
 children: node, // React Elements
 as: oneOf([ 'h1', 'h2', 'h3', 'h4', 'h5', 'h6' ]),
 className: string,
};

Heading.defaultProps = {
  children: {},
};

// h1, h2, h3, h4, h5, h6
export default Heading;