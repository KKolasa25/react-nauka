import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero';
import PropTypes from 'prop-types';
import Column from '../Column/ColumnContainer';
import { settings } from '../../data/dataStore';
import ReactHtmlParser from 'react-html-parser';
import Creator from '../Creator/Creator';

const List = props => (
  <section className={styles.component}>
    <Hero titleText={props.title} image={props.image} />
    <div className={styles.description}>
      {ReactHtmlParser(props.description)}
    </div>
    <div className={styles.columns}>
      {props.columns.map(columnData => (
        <Column key={columnData.id} {...columnData} />
      ))}
    </div>
    <div className={styles.creator}>
      <Creator text={settings.columnCreatorText} action={props.addColumn} />
    </div>
  </section>
);

List.propTypes = {
  title: PropTypes.node.isRequired,
  image: PropTypes.node.isRequired,
  description: PropTypes.node,
  columns: PropTypes.array,
  addColumn: PropTypes.func,
};
export default List;

/*class List extends React.Component {

  static propTypes = {
    title: PropTypes.node.isRequired,
    image: PropTypes.node.isRequired,
    description: PropTypes.node,
    columns: PropTypes.array,
    addColumn: PropTypes.func,

  }
  static defaultProps = {
    description: settings.defaultListDescription,
  }

  render() {
    const { title, image, description, columns, addColumn } = this.props;
    return (
      <section className={styles.component}>
        <Hero titleText={title} image={image} />
        <div className={styles.description}>
          {ReactHtmlParser(description)}
        </div>
        <div className={styles.columns}>
          {columns.map(columnData => (
            <Column key={columnData.id} {...columnData} />
          ))}
        </div>
        <div className={styles.creator}>
          <Creator text={settings.columnCreatorText} action={addColumn} />
        </div>
      </section>
    );
  }
}
export default List;*/
