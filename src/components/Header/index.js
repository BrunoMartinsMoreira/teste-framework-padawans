import React from 'react';
import BackHomeBtn from '../HomeBtn';
import Links from '../Links';
import './style.css';

const Header = () => {
   return (
      <header className="header">
         <div className="back">
            <BackHomeBtn />
         </div>
         <div className="nav">
            <Links />
         </div>
      </header>
   );
}

export default Header;