
import { mapStateToProps } from './NumbersListPageContainer';

import { getCounterValuesHistory } from '../../state/counter/selectors';


jest.mock('../../state/counter/selectors', () => ({
  getCounterValuesHistory: jest.fn(),
}));

const NUMBERS_LIST = [1, 2];


getCounterValuesHistory.mockReturnValue([1, 2]);

let props;

describe('mapStateToProps', () => {
  it('must define numbersList property', () => {
    props = mapStateToProps({});
    expect(props).toHaveProperty('numbersList', NUMBERS_LIST);
  });
});
