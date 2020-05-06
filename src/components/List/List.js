import React from 'react';
import styles from './List.scss'; // podłączenie styli do komponentu App
import Hero from '../Hero/Hero';

class List extends React.Component {
  render() {
    return ( // nawiasy klamrowe pozwalaja pozwalają na wstawienie kodu JS wewnątrz kodu JSX
      <section className = {styles.component}> 
        <Hero />
      </section>
    )
  }
}

export default List;
