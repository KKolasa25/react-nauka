import React from 'react';
import styles from './Hero.scss';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';

const Hero = props => (
  <header className={styles.component}>
    <h2 className={styles.title}>{ReactHtmlParser(props.titleText)}</h2>
    <img className={styles.image} src={props.image} />
  </header>
);

Hero.propTypes = {
  titleText: PropTypes.string.isRequired, // zmiana z "node" na "string", ponieważ jest ciąg znaków
  image: PropTypes.string, // zmiana z "node" na "string", ponieważ link to ciąg znaków (?)

};

export default Hero;
