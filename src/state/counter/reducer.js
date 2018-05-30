import { combineReducers } from 'redux';

import { SET_COUNTER_VALUE } from './actions';


export const valuesHistory = (state = [], action = {}) => {
  switch (action.type) {
    case SET_COUNTER_VALUE:
      return [...state, action.payload.value];

    default:
      return state;
  }
};

const value = (state = 0, action = {}) => {
  switch (action.type) {
    case SET_COUNTER_VALUE:
      return action.payload.value;

    default:
      return state;
  }
};

export default combineReducers({
  value,
  valuesHistory,
});
