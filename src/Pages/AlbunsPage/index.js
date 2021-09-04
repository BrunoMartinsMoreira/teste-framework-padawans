import React from 'react';
import Albuns from '../../components/Albuns';
import Header from '../../components/Header';
import '../pages.css';

const AlbunsPage = () => {
   return (
      <div className="pageContainer">
         <div className="headerContainer">
            <Header />
         </div>

         <div className="page">
            <Albuns />
         </div>

      </div>
   );
}

export default AlbunsPage;