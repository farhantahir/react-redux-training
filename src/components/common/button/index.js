import React from 'react';
import { node, func, string } from 'prop-types';

const Button = ({children, onClick, className}) => {
  return <button onClick={onClick} className={className}>{children}</button>;
};

Button.propTypes = {
  children: node,
  onClick: func.isRequired,
  className: string,
};

export default Button;