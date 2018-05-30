import React from 'react';
import '../../enzyme-init';
import { shallow } from 'enzyme';
import NavigationBar from './NavigationBar';

global.console.error = jest.fn();

const LINKS = [
  { to: '/route-1', text: 'Route 1' },
  { to: '/route-2', text: 'Route 2' },
];

beforeEach(jest.clearAllMocks);

describe('if links are not provided', () => {
  it('prints a warning on console.error', () => {
    const component = shallow(<NavigationBar />);
    expect(component.exists()).toEqual(true);
    expect(global.console.error).toHaveBeenCalled();
  });
});

describe('if links are provided', () => {
  let component;

  beforeEach(() => {
    component = shallow(<NavigationBar links={LINKS} />);
  });

  it('does not print a warning on console.error', () => {
    expect(component.exists()).toEqual(true);
    expect(global.console.error).not.toHaveBeenCalled();
  });

  it('has class NavigationBar', () => {
    expect(component.hasClass('NavigationBar')).toEqual(true);
  });

  it('has as many list items as links', () => {
    expect(component.find('.NavigationBar__list-item')).toHaveLength(LINKS.length);
  });

  it('each item must contain a Link with correct target route and text', () => {
    component.find('.NavigationBar__list-item').forEach((listItem, i) => {
      const link = listItem.find('Link');
      expect(link.exists()).toBe(true);
      expect(link.prop('to')).toBe(LINKS[i].to);
      expect(link.prop('children')).toBe(LINKS[i].text);
    })
  });
});
