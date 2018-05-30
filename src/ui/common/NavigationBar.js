import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

import './NavigationBar.css';

const NavigationBar = ({ links }) => (
  <nav className="NavigationBar">
    <ul className="NavigationBar__list">
      {links && links.map(link => (
        <li key={link.to} className="NavigationBar__list-item">
          <Link className="NavigationBar__link" to={link.to}>
            {link.text}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);

NavigationBar.displayName = 'NavigationBar';

NavigationBar.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({
    to: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  })).isRequired,
};

export default NavigationBar;
