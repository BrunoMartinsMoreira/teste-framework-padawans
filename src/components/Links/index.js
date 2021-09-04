import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Links = () => {
   return (
      <nav className="nav">
         <div className="link">
            <Link className="links" to="/albuns">Albuns</Link>
         </div>

         <div className="link">
            <Link className="links" to="/tasks">Tarefas</Link>
         </div>

         <div className="link">
            <Link className="links" to="/posts">Postagens</Link>
         </div>
      </nav >
   );
}

export default Links;