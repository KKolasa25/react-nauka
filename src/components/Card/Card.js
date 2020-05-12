import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';

class Card extends React.Component{
  static propTypes = {
    title: PropTypes.string.isRequired,
  }

  render(){

    return(
      <section className={styles.component}>
        <h1>{this.props.title}</h1>
      </section>
    )
  }
}

export default Card;


//class Creator extends React.Component {
  //<section className={styles.component}> 
    //<h3 className={styles.title}>{props.cardCreatorText}</h3>
  //</section>
//};

//Card.propTypes = {
  //cardCreatorText: PropTypes.string.isRequired,
//};

//export default Card;
