import React from 'react';
import Tasks from '../../components/ToDos/index';
import Header from '../../components/Header';


const ToDosPage = () => {
   return (
      <div className="pageContainer">
         <div className="headerContainer">
            <Header />
         </div>

         <div className="page">
            <Tasks />
         </div>

      </div>
   );
}

export default ToDosPage;