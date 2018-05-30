import { COUNTER_MIN_VALUE, COUNTER_MAX_VALUE } from './const';

export const getCounterValue = state => state.counter.value;
export const getCounterValuesHistory = state => state.counter.valuesHistory;
export const getCounterIsMax = state => state.counter.value === COUNTER_MAX_VALUE;
export const getCounterIsMin = state => state.counter.value === COUNTER_MIN_VALUE;


const buildState = (value = 0, valuesHistory = []) => ({
  counter: {
    value,
    valuesHistory,
  }
});

const STATE_MIDDLE = buildState(3, [1, 2, 3]);
const STATE_MIN = buildState(COUNTER_MIN_VALUE, [1, 2, 1, 0]);
const STATE_MAX = buildState(COUNTER_MAX_VALUE, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);


describe('when value is at minimum', () => {
  it('getCounterValue(state) should return the counter value', () => {
    expect(getCounterValue(STATE_MIN)).toBe(STATE_MIN.counter.value);
  });
  
  it('getCounterValuesHistory(state) should return the counter values history', () => {
    expect(getCounterValuesHistory(STATE_MIN)).toBe(STATE_MIN.counter.valuesHistory);
  });

  it('getCounterIsMin(state) should return true', () => {
    expect(getCounterIsMin(STATE_MIN)).toBe(true);
  });

  it('getCounterIsMax(state) should return false', () => {
    expect(getCounterIsMax(STATE_MIN)).toBe(false);
  });
});


describe('when value is at maximum', () => {
  it('getCounterValue(state) should return the counter value', () => {
    expect(getCounterValue(STATE_MAX)).toBe(STATE_MAX.counter.value);
  });
  
  it('getCounterValuesHistory(state) should return the counter values history', () => {
    expect(getCounterValuesHistory(STATE_MAX)).toBe(STATE_MAX.counter.valuesHistory);
  });

  it('getCounterIsMin(state) should return false', () => {
    expect(getCounterIsMin(STATE_MAX)).toBe(false);
  });

  it('getCounterIsMax(state) should return true', () => {
    expect(getCounterIsMax(STATE_MAX)).toBe(true);
  });
});


describe('when value is not at minimum nor maximum', () => {
  it('getCounterValue(state) should return the counter value', () => {
    expect(getCounterValue(STATE_MIDDLE)).toBe(STATE_MIDDLE.counter.value);
  });
  
  it('getCounterValuesHistory(state) should return the counter values history', () => {
    expect(getCounterValuesHistory(STATE_MIDDLE)).toBe(STATE_MIDDLE.counter.valuesHistory);
  });

  it('getCounterIsMin(state) should return false', () => {
    expect(getCounterIsMin(STATE_MIDDLE)).toBe(false);
  });

  it('getCounterIsMax(state) should return false', () => {
    expect(getCounterIsMax(STATE_MIDDLE)).toBe(false);
  });
});
