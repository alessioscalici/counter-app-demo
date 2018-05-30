import React from 'react';
import PropTypes from 'prop-types';

import NavigationBar from '../common/NavigationBar';

import './CounterPage.css';


const links = [
  { to: '/values-history', text: 'Go to history' }
];

const CounterPage = ({ value, isMinValue, isMaxValue, decrement, increment }) => (
  <div className="CounterPage">
    <NavigationBar links={links} />
    <h1 className="CounterPage__title">Counter</h1>
    <div className="CounterPage__counter">
      <button
        className="CounterPage__minus-btn"
        disabled={isMinValue}
        onClick={decrement}
      >
        -
      </button>
      <span className="CounterPage__counter-value">
        {value}
      </span>
      <button
        className="CounterPage__plus-btn"
        disabled={isMaxValue}
        onClick={increment}
      >
        +
      </button>
    </div>
  </div>
);

CounterPage.displayName = 'CounterPage';

CounterPage.propTypes = {
  value: PropTypes.number.isRequired,
  isMinValue: PropTypes.bool,
  isMaxValue: PropTypes.bool,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
};

CounterPage.defaultValues = {
  isMinValue: false,
  isMaxValue: false,
};

export default CounterPage;
