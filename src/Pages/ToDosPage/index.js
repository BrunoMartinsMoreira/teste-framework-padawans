import React from 'react';
import Tasks from '../../components/ToDos/index'
import BackHomeBtn from '../../components/HomeBtn';

const ToDosPage = () => {
   return (
      <div>
         <BackHomeBtn />
         <Tasks />
      </div>
   );
}

export default ToDosPage;