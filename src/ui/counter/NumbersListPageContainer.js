
import { connect } from 'react-redux';

import NumbersListPage from './NumbersListPage';

import { getCounterValuesHistory } from '../../state/counter/selectors';


export const mapStateToProps = state => ({
  numbersList: getCounterValuesHistory(state),
});


const NumbersListPageContainer = connect(mapStateToProps, null)(NumbersListPage);
NumbersListPageContainer.displayName = 'NumbersListPageContainer';

export default NumbersListPageContainer;
