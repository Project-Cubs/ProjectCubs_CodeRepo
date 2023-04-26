import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const BackButton = () => {
  return (
    <div>
      <NavLink to="/learn" className="Links backButton">
        <FontAwesomeIcon
          icon="fa-solid fa-arrow-left"
          style={{ color: '#ffffff' }}
          className="icons"
        />
      </NavLink>
    </div>
  );
};
