import React from 'react';
import { Link } from 'react-router-dom';


const HomePage = () => {
   return (
      <main>
         <div>
            <Link to="/albuns">Albuns</Link>
         </div>

         <div>
            <Link to="/tasks">Tarefas</Link>
         </div>

         <div>
            <Link to="/posts">Posts</Link>
         </div>
      </main>
   );
}

export default HomePage;