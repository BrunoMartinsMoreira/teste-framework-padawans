import React from 'react';
import { Link, BrowserRouter } from 'react-router-dom';
import Tasks from '../../components/ToDos/index'

const TasksPage = () => {
   return (
      <BrowserRouter>
         <button>
            <Link to exact path="/">Voltar</Link>
         </button>

         <Tasks />
      </BrowserRouter>
   );
}

export default TasksPage;