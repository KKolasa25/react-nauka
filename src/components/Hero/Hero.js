import React from 'react';
import styles from './Hero.scss';
import PropTypes from 'prop-types';

const Hero = props => (
  <header className={styles.component}>
    <h2 className={styles.title}>{props.titleText}</h2>
    <img className={styles.image} src={props.srcImg} alt={props.alt} />
  </header> 
);

Hero.propTypes = {
  titleText: PropTypes.node.isRequired,
  srcImg: PropTypes.node.isRequired,
  alt: PropTypes.node.isRequired,
};
export default Hero;
