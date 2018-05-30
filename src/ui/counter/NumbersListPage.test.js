import React from 'react';
import '../../enzyme-init';
import { shallow } from 'enzyme';
import NumbersListPage from './NumbersListPage';

global.console.error = jest.fn();


const NUMBERS_LIST = [1, 2, 3, 4, 3, 2];

const instanciate = (numbersList) => (
  shallow(<NumbersListPage
    numbersList={numbersList}
  />)
);


beforeEach(jest.clearAllMocks);

describe('if props are not provided', () => {
  it('prints a warning on console.error', () => {
    const component = shallow(<NumbersListPage />);
    expect(component.exists()).toEqual(true);
    expect(global.console.error).toHaveBeenCalled();
  });
});

describe('if props are provided', () => {
  const VALUE = 3;
  let component;

  beforeEach(() => {
    component = instanciate(NUMBERS_LIST);
  });

  it('does not print a warning on console.error', () => {
    expect(component.exists()).toEqual(true);
    expect(global.console.error).not.toHaveBeenCalled();
  });

  it('has class NumbersListPage', () => {
    expect(component.hasClass('NumbersListPage')).toBe(true);
  });

  it('has a navigation bar', () => {
    expect(component.find('NavigationBar').exists()).toBe(true);
  });

  it('has a title', () => {
    expect(component.find('h1.NumbersListPage__title').exists()).toBe(true);
  });

  it('renders a list item per number in the list', () => {
    const listItems = component.find('.NumbersListPage__list-item');
    expect(listItems).toHaveLength(NUMBERS_LIST.length);
    listItems.forEach((listItem, i) => {
      expect(listItem.text()).toBe(`${NUMBERS_LIST[i]}`)
    });
    
  });
});
