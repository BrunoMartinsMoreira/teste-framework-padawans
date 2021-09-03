import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import PostsPage from './Pages/PostsPage';
import AlbunsPage from './Pages/AlbunsPage';
import TasksPage from './Pages/ToDosPage';

const Routes = () => {
   return (
      <Switch>
         <Route exact path="/">
            <HomePage />
         </Route>

         <Route exact path="/albuns">
            <AlbunsPage />
         </Route>

         <Route exact path="posts">
            <PostsPage />
         </Route>

         <Route exact path="/tasks">
            <TasksPage />
         </Route>
      </Switch>
   )
}

export default Routes