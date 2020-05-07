import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero';
import PropTypes from 'prop-types';
import Column from '../Column/Column';

class List extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
    children: PropTypes.node,
    titleFirst: PropTypes.string.isRequired, 
    titleSecond: PropTypes.string.isRequired,
    titleThird: PropTypes.string.isRequired, 
    srcImg: PropTypes.node.isRequired,
  }
  static defaultProps = {
    children: <p>I can do all the things!!!</p>,
  }
  render() {
    return (
      <section className={styles.component}> 
        <Hero titleText={this.props.title} srcImg={this.props.srcImg} alt={this.props.alt} /> 
        <div className={styles.description}>
          {this.props.children}
        </div>
        <div className={styles.columns}>
          <Column titleColumn={this.props.titleFirst} />
          <Column titleColumn={this.props.titleSecond} />
          <Column titleColumn={this.props.titleThird} />
        </div>
      </section>
    )
  }
}

export default List;
