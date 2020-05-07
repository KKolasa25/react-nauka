import React from 'react';
import styles from './App.scss';
import List from '../List/List';

class App extends React.Component {
  render() {
    return ( 
      <main className={styles.component}> 
        <h1 className={styles.title}>My first React app. Props</h1>
        <h2 className={styles.subtitle}>Hello World!</h2>
        <List title={['Things to do ', <sup key='1'>soon!</sup>]}
        srcImg="http://uploads.kodilla.com/bootcamp/fer/11.react/space.png" alt="space_background" // wpisany adres obrazka i alternatywy w APP
        titleFirst={'Animals'}
        titleSecond={'Minerals'} 
        titleThird={'Plants'}>
        </List>
      </main>
    )
  }
}

export default App;
