import React from 'react';
import { Button } from '@mui/material';

const Button = ({
  onClick,
  variant = 'contained',
  children,
  color = 'primary',
  ...rest
}) => {
  return (
    <Button variant={variant} color={color} onClick={onClick} {...rest}>
      {children}
    </Button>
  );
};

export default Button;
