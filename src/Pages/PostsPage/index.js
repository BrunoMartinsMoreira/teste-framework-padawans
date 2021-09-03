import React from 'react';
import { Link, BrowserRouter } from 'react-router-dom';
import Posts from './index'

const PostsPage = () => {
   return (
      <BrowserRouter>
         <button>
            <Link to exact path="/">Voltar</Link>
         </button>

         <Posts />
      </BrowserRouter>
   );
}

export default PostsPage;