import React from 'react';
import Postagens from '../../components/Postagens';
import BackHomeBtn from '../../components/HomeBtn';

const PostsPage = () => {
   return (
      <div>
         <BackHomeBtn />
         <Postagens />
      </div>
   );
}

export default PostsPage;