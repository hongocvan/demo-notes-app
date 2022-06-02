import React from 'react';
import Button from 'react-bootstrap/Button';
import { BsArrowRepeat } from 'react-icons/bs';
import './LoaderButton.css';

export default function LoaderButton({
  isLoading,
  className = '',
  disable = false,
  ...props
}) {
  return (
    <Button
      disabled={disable || isLoading}
      className={`LoaderButton ${className}`}
      {...props}
    >
      {isLoading && <BsArrowRepeat className="spinning" />}
      {props.children}
    </Button>
  );
}
