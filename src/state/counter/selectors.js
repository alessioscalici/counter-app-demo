import { COUNTER_MIN_VALUE, COUNTER_MAX_VALUE } from './const';

export const getCounterValue = state => state.counter.value;
export const getCounterValuesHistory = state => state.counter.valuesHistory;
export const getCounterIsMax = state => state.counter.value === COUNTER_MAX_VALUE;
export const getCounterIsMin = state => state.counter.value === COUNTER_MIN_VALUE;
