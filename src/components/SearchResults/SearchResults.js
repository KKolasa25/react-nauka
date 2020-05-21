import React from 'react';
import styles from './SearchResults.scss';
import PropTypes from 'prop-types';
import { settings } from '../../data/dataStore';
import Icon from '../Icon/Icon';
import Card from '../Card/Card';
import Container from '../Container/Container';
//import { Link } from 'react-router-dom';

const SearchResults = props => (

  <Container>
    <section className={styles.component}>
      <h3 className={styles.title}>
        <span className={styles.icon}>
          <Icon name={props.icon} />
          {props.searchTitle}
        </span>
      </h3>
      <div className={styles.cards}>
        {/*<Link to={`/list/${props.id}`} className={styles.link}>*/}
        {props.cards.map(cardData => (
          <Card key={cardData.id} {...cardData} />
        ))}
        {/*</Link>*/}
      </div>
    </section>
  </Container>

);

SearchResults.propTypes = {
  title: PropTypes.string,
  cards: PropTypes.array,
  icon: PropTypes.string,
  addCard: PropTypes.func,
  searchTitle: PropTypes.string,
  //id: PropTypes.string,
};

SearchResults.defaultProps = {
  description: settings.defaultColumnIcon,
  icon: settings.defaultColumnIcon,
  searchTitle: settings.defaultSearchTitle,
};

export default SearchResults;