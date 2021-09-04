import React from 'react';
import Postagens from '../../components/Postagens';
import Header from '../../components/Header';

const PostsPage = () => {
   return (
      <div className="pageContainer">
         <div className="headerContainer">
            <Header />
         </div>

         <div className="page">
            <Postagens />
         </div>

      </div>
   );
}

export default PostsPage;