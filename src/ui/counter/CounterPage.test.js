import React from 'react';
import '../../enzyme-init';
import { shallow } from 'enzyme';
import CounterPage from './CounterPage';

global.console.error = jest.fn();

const incrementMock = jest.fn();
const decrementMock = jest.fn();


const instanciate = (value, isMinValue, isMaxValue) => (
  shallow(<CounterPage
    increment={incrementMock}
    decrement={decrementMock}
    value={value}
    isMinValue={isMinValue}
    isMaxValue={isMaxValue}
  />)
);


beforeEach(jest.clearAllMocks);

describe('if props are not provided', () => {
  it('prints a warning on console.error', () => {
    const component = shallow(<CounterPage />);
    expect(component.exists()).toEqual(true);
    expect(global.console.error).toHaveBeenCalled();
  });
});

describe('if props are provided', () => {
  const VALUE = 3;
  let component;

  beforeEach(() => {
    component = instanciate(VALUE, false, false);
  });

  it('does not print a warning on console.error', () => {
    expect(component.exists()).toEqual(true);
    expect(global.console.error).not.toHaveBeenCalled();
  });

  it('has class CounterPage', () => {
    expect(component.hasClass('CounterPage')).toBe(true);
  });

  it('has a navigation bar', () => {
    expect(component.find('NavigationBar').exists()).toBe(true);
  });

  it('has a title', () => {
    expect(component.find('h1.CounterPage__title').exists()).toBe(true);
  });

  it('renders the value', () => {
    expect(component.find('.CounterPage__counter-value').text()).toBe(`${VALUE}`);
  });

  it('clicking the minus button calls decrement', () => {
    component.find('.CounterPage__minus-btn').simulate('click');
    expect(decrementMock).toHaveBeenCalled();
  });

  it('clicking the plus button calls increment', () => {
    component.find('.CounterPage__plus-btn').simulate('click');
    expect(incrementMock).toHaveBeenCalled();
  });
});

describe('if isMaxValue === true', () => {
  let component;

  beforeEach(() => {
    component = instanciate(5, false, true);
  });

  it('the minus button is not disabled', () => {
    const disabled = component.find('.CounterPage__minus-btn').prop('disabled');
    expect(disabled).toBe(false);
  });

  it('the plus button is disabled', () => {
    const disabled = component.find('.CounterPage__plus-btn').prop('disabled');
    expect(disabled).toBe(true);
  });
});

describe('if isMinValue === true', () => {
  let component;

  beforeEach(() => {
    component = instanciate(5, true, false);
  });

  it('the minus button is disabled', () => {
    const disabled = component.find('.CounterPage__minus-btn').prop('disabled');
    expect(disabled).toBe(true);
  });

  it('the plus button is not disabled', () => {
    const disabled = component.find('.CounterPage__plus-btn').prop('disabled');
    expect(disabled).toBe(false);
  });
});
