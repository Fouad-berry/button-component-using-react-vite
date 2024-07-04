// src/components/Button.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ label, onClick, style, disabled }) => {
  return (
    <button 
      className="custom-button" 
      onClick={onClick} 
      style={style} 
      disabled={disabled}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  style: PropTypes.object,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  onClick: () => {},
  style: {},
  disabled: false,
};

export default Button;
