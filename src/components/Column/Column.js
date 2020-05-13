import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import { settings } from '../../data/dataStore';
import Icon from '../Icon/Icon';
//import Creator from '../Creator/Creator';
import Card from '../Card/Card';

class Column extends React.Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
    cards: PropTypes.array,
    icon: PropTypes.node,
  }

  static defaultProps = {
    description: settings.defaultColumnIcon,
  }

  render() {
    const { title, icon, cards } = this.props;
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>
          <span className={styles.icon}>
            <Icon name={icon} />
            {title}
          </span>
        </h3>
        <div className={styles.cards}>
          {cards.map(cardData => (
            <Card key={cardData.id} {...cardData} />
          ))}
        </div>
        {/*
        <div className={styles.creator}>
          <Creator text={settings.cardCreatorText} action={title => this.addCard(title)} />
        </div>
        */}
      </section>
    );
  }
}
export default Column;
