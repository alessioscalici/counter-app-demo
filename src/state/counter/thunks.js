import { COUNTER_MIN_VALUE, COUNTER_MAX_VALUE } from './const';
import { getCounterValue } from './selectors';
import { setCounterValue } from './actions';


export const incrementCounter = () => (dispatch, getState) => {
  const currentValue = getCounterValue(getState());
  if (currentValue >= COUNTER_MAX_VALUE) {
    return;
  }
  dispatch(setCounterValue(currentValue + 1));
};

export const decrementCounter = () => (dispatch, getState) => {
  const currentValue = getCounterValue(getState());
  if (currentValue <= COUNTER_MIN_VALUE) {
    return;
  }
  dispatch(setCounterValue(currentValue - 1));
};
