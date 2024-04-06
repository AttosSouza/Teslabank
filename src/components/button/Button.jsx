import React from 'react';
import styles from './button.module.css';

const Button = ({ className, href, children, type, ...props }) => {
  const classes =
    type === 'primary' ? styles.buttonPrimary : styles.buttonSecondary;

  const renderButton = () => (
    <button {...props} className={classes}>
      {children}
    </button>
  );

  const renderLink = () => (
    <a {...props} href={href} className={classes}>
      {children}
    </a>
  );

  return href ? renderLink() : renderButton();
};

export default Button;
