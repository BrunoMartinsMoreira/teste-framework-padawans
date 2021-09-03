import React from 'react';
import { Link, BrowserRouter } from 'react-router-dom';


const HomePage = () => {
   return (
      <BrowserRouter>
         <div>
            <Link to="/albuns">
               Albuns
            </Link>
         </div>

         <div>
            <Link to="/tasks">
               Tarefas
            </Link>
         </div>

         <div>
            <Link to="/posts">
               Postagens
            </Link>
         </div>
      </BrowserRouter>
   );
}

export default HomePage;