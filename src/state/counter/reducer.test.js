import reducer from './reducer';
import { setCounterValue } from './actions';


describe('initial state', () => {
  let state;

  beforeEach(() => {
    state = reducer();
  });

  it('must have property value === 0', () => {
    expect(state.value).toBe(0);
  });

  it('must have property valuesHistory (empty Array)', () => {
    expect(state.valuesHistory).toEqual([]);
  });
});

describe('after action SET_COUNTER_VALUE', () => {
  const FIRST_VALUE = 1;
  let firstState;

  beforeEach(() => {
    firstState = reducer(undefined, setCounterValue(FIRST_VALUE));
  });

  it('property value should be FIRST_VALUE', () => {
    expect(firstState.value).toBe(FIRST_VALUE);
  });

  it('property valuesHistory should contain FIRST_VALUE', () => {
    expect(firstState.valuesHistory).toEqual([FIRST_VALUE]);
  });

  describe('after another action SET_COUNTER_VALUE', () => {
    const SECOND_VALUE = 2;
    let secondState;
  
    beforeEach(() => {
      secondState = reducer(firstState, setCounterValue(SECOND_VALUE));
    });
  
    it('property value should be SECOND_VALUE', () => {
      expect(secondState.value).toBe(SECOND_VALUE);
    });
  
    it('property valuesHistory should contain SECOND_VALUE as the last item', () => {
      expect(secondState.valuesHistory).toEqual([FIRST_VALUE, SECOND_VALUE]);
    });
  });
});
