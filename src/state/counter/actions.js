export const SET_COUNTER_VALUE = 'counter/set-value';

export const setCounterValue = (value) => ({
  type: SET_COUNTER_VALUE,
  payload: {
    value,
  },
});
