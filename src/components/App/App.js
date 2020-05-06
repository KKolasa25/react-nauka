import React from 'react';
import styles from './App.scss'; // podłączenie styli do komponentu App
import List from '../List/List';

class App extends React.Component {
  render() {
    return ( // nawiasy klamrowe pozwalaja pozwalają na wstawienie kodu JS wewnątrz kodu JSX
      <main className={styles.component}> 
        <h1 className={styles.title}>My first React app</h1>
        <h2 className={styles.subtitle}>Hello World!</h2>
        <List />
      </main>
    )
  }
}

export default App;
