import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';

const Card = props => (
  <section className={styles.component}>
    <h1>{props.title}</h1>
  </section>
);

Card.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Card;

/*class Card extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  }

  render() {

    const { title } = this.props;

    return (
      <section className={styles.component}>
        <h1>{title}</h1>
      </section>
    );
  }
}

export default Card;*/