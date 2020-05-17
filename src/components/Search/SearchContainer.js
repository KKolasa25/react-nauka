import {connect} from 'react-redux';
import Search from './Search';
import {
  getSearchString,
  countVisibleCards,
  countAllCards,
  createAction_changeSearchString,
} from '../../redux/searchStringRedux';

const mapStateToProps = (state) => ({
  searchString: getSearchString(state),
  countVisible: countVisibleCards(state),
  countAll: countAllCards(state),
});

const mapDispatchToProps = (dispatch) => ({
  changeSearchString: newSearchString => dispatch(createAction_changeSearchString(newSearchString)),
  //  props "changeSearchString" zawiera funkcje przyjującą argument newSearchString i na podstawie tego argumentu zostanie wykonana funkcja dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
