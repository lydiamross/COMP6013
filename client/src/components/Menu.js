import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react';
import { DropdownMenu, MenuContainer } from '../styled';

export const Menu = () => {
  const [isMenuDisplayed, setMenuDisplay] = useState(false);

  function onToggleChange() {
    setMenuDisplay(!isMenuDisplayed);
  }

  return (
    <MenuContainer>
      <FontAwesomeIcon
        onClick={onToggleChange}
        icon={faBars}
        size="2x" />
      {isMenuDisplayed &&
        <DropdownMenu>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/cards">Cards</Link></li>
          <li><Link to="/topics">Topics</Link></li>
        </DropdownMenu>
      }
    </MenuContainer >
  );
};
