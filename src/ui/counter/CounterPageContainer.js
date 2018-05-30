import { connect } from 'react-redux';

import CounterPage from './CounterPage';

import { getCounterValue, getCounterIsMin, getCounterIsMax } from '../../state/counter/selectors';
import { incrementCounter, decrementCounter } from '../../state/counter/thunks';


export const mapStateToProps = state => ({
  value: getCounterValue(state),
  isMinValue: getCounterIsMin(state),
  isMaxValue: getCounterIsMax(state),
});


export const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(incrementCounter()),
  decrement: () => dispatch(decrementCounter()),
});


const CounterPageContainer = connect(mapStateToProps, mapDispatchToProps)(CounterPage);
CounterPageContainer.displayName = 'CounterPageContainer';

export default CounterPageContainer;
