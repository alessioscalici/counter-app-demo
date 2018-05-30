import React from 'react';
import PropTypes from 'prop-types';

import NavigationBar from '../common/NavigationBar';

import './NumbersListPage.css';


const links = [
  { to: '/', text: 'Go to counter' }
];

const NumbersListPage = ({ numbersList }) => (
  <div className="NumbersListPage">
    <NavigationBar links={links} />
    <h1 className="NumbersListPage__title">Values history</h1>
    <ul>
      {numbersList && numbersList.length ?
        numbersList.map((num, i) => (
          <li key={i} className="NumbersListPage__list-item">
            {num}
          </li>
        )) :
        <li>There are no numbers yet!</li>
      }
    </ul>
  </div>
);

NumbersListPage.displayName = 'NumbersListPage';

NumbersListPage.propTypes = {
  numbersList: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
};


export default NumbersListPage;
