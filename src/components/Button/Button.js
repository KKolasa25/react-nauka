import React from 'react';
import styles from './Button.scss';
import PropTypes from 'prop-types';

const Button = ({ variant = '', ...otherProps }) => (
  <button
    {...otherProps}
    className={styles.component + variant.split(' ').map(name => ' ' + (styles[name] || name)).join('')}
  />
);

Button.propTypes = {
  variant: PropTypes.string, // zmiana z "node" na "string", ponieważ metode variant.split wykonujemy na ciągu znaków
};

export default Button;
