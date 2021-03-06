import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import { settings } from '../../data/dataStore';
import Icon from '../Icon/Icon';
import Creator from '../Creator/Creator';
import Card from '../Card/Card';

const Column = props => (
  <section className={styles.component}>
    <h3 className={styles.title}>
      <span className={styles.icon}>
        <Icon name={props.icon} />
        {props.title}
      </span>
    </h3>
    <div className={styles.cards}>
      {props.cards.map(cardData => (
        <Card key={cardData.id} {...cardData} />
      ))}
    </div>
    <div className={styles.creator}>
      <Creator text={settings.cardCreatorText} action={props.addCard} />
    </div>
  </section>
);

Column.propTypes = {
  title: PropTypes.string.isRequired,
  cards: PropTypes.array,
  icon: PropTypes.string,
  addCard: PropTypes.func,
};

Column.defaultProps = {
  description: settings.defaultColumnIcon,
  icon: settings.defaultColumnIcon,
};

export default Column;
