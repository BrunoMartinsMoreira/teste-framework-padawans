import React from 'react';
import { Link, BrowserRouter } from 'react-router-dom';
import Albuns from '../../components/Albuns';

const AlbunsPage = () => {
   return (
      <BrowserRouter>
         <button>
            <Link to exact path="/">Voltar</Link>
         </button>

         <Albuns />
      </BrowserRouter>
   );
}

export default AlbunsPage;