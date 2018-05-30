
import { mapStateToProps, mapDispatchToProps } from './CounterPageContainer';

import { getCounterValue, getCounterIsMin, getCounterIsMax } from '../../state/counter/selectors';
import { incrementCounter, decrementCounter } from '../../state/counter/thunks';

jest.mock('../../state/counter/selectors', () => ({
  getCounterValue: jest.fn(),
  getCounterIsMin: jest.fn(),
  getCounterIsMax: jest.fn(),
}));

jest.mock('../../state/counter/thunks', () => ({
  incrementCounter: jest.fn(),
  decrementCounter: jest.fn(),
}));


const VALUE = 3;
const VALUE_IS_MIN = false;
const VALUE_IS_MAX = true;


getCounterValue.mockReturnValue(VALUE);
getCounterIsMin.mockReturnValue(VALUE_IS_MIN);
getCounterIsMax.mockReturnValue(VALUE_IS_MAX);

beforeEach(jest.clearAllMocks);

describe('mapStateToProps', () => {
  it('must map the props correctly', () => {
    const props = mapStateToProps();

    expect(props).toHaveProperty('isMinValue', VALUE_IS_MIN);
    expect(props).toHaveProperty('isMaxValue', VALUE_IS_MAX);
    expect(props).toHaveProperty('value', VALUE);
  });
});


describe('mapDispatchToProps', () => {
  const dispatchMock = jest.fn();
  let props;

  beforeEach(() => {
    props = mapDispatchToProps(dispatchMock);
  });

  it('must map the props correctly', () => {
    expect(props.increment).toBeInstanceOf(Function);
    expect(props.decrement).toBeInstanceOf(Function);
  });

  it('props.increment should call dispatch', () => {
    props.increment();
    expect(dispatchMock).toHaveBeenCalled();
  });

  it('props.decrement should call dispatch', () => {
    props.decrement();
    expect(dispatchMock).toHaveBeenCalled();
  });
});
