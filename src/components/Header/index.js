import React from 'react';
import BackHomeBtn from '../HomeBtn';
import Links from '../Links';
import './style.css';

const Header = () => {
   return (
      <header className="header">
         <BackHomeBtn />
         <Links />
      </header>
   );
}

export default Header;