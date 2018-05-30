import { COUNTER_MIN_VALUE, COUNTER_MAX_VALUE } from './const';
import { incrementCounter, decrementCounter } from './thunks';
import { SET_COUNTER_VALUE } from './actions';

const dispatch = jest.fn();
const getState = jest.fn();


const buildState = (value = 0, valuesHistory = []) => ({
  counter: {
    value,
    valuesHistory,
  }
});

const STATE_MIDDLE = buildState(3, [1, 2, 3]);
const STATE_MIN = buildState(COUNTER_MIN_VALUE, [1, 2, 1, 0]);
const STATE_MAX = buildState(COUNTER_MAX_VALUE, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);


beforeEach(jest.clearAllMocks);

describe('incrementCounter', () => {
  it('if counter is not at maximum, it should increment', () => {
    getState.mockReturnValue(STATE_MIDDLE);
    const curValue = getState().counter.value;

    incrementCounter()(dispatch, getState);

    expect(dispatch).toHaveBeenCalledWith({
      type: SET_COUNTER_VALUE,
      payload: {
        value: curValue + 1,
      },
    });
  });

  it('if counter is at maximum, it should dispatch nothing', () => {
    getState.mockReturnValue(STATE_MAX);
    const curValue = getState().counter.value;

    incrementCounter()(dispatch, getState);

    expect(dispatch).not.toHaveBeenCalled();
  });
});

describe('decrementCounter', () => {
  it('if counter is not at minimum, it should decrement', () => {
    getState.mockReturnValue(STATE_MIDDLE);
    const curValue = getState().counter.value;

    decrementCounter()(dispatch, getState);

    expect(dispatch).toHaveBeenCalledWith({
      type: SET_COUNTER_VALUE,
      payload: {
        value: curValue - 1,
      },
    });
  });

  it('if counter is at minimum, it should dispatch nothing', () => {
    getState.mockReturnValue(STATE_MIN);
    const curValue = getState().counter.value;

    decrementCounter()(dispatch, getState);

    expect(dispatch).not.toHaveBeenCalled();
  });
});
