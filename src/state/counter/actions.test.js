import {
  SET_COUNTER_VALUE,
  setCounterValue,
} from './actions';

it('must export SET_COUNTER_VALUE', () => {
  expect(SET_COUNTER_VALUE).toBeTruthy();
});

describe('setCounterValue()', () => {
  const VALUE = 3;
  let action;

  beforeEach(() => {
    action = setCounterValue(VALUE);
  });

  it('returns an action of type SET_COUNTER_VALUE', () => {
    expect(action.type).toBe(SET_COUNTER_VALUE);
  });

  it('returned action has property payload.value', () => {
    expect(action.payload).toBeDefined();
    expect(action.payload.value).toBe(VALUE);
  });
});
