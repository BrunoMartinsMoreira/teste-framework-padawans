import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage/index';
import PostsPage from './Pages/PostsPage/index';
import AlbunsPage from './Pages/AlbunsPage/index';
import ToDosPage from './Pages/ToDosPage/index';

const AppRoutes = () => {
   return (
      <Switch>
         <Route exact path="/">
            <HomePage />
         </Route>

         <Route exact path="/albuns">
            <AlbunsPage />
         </Route>

         <Route exact path="/posts">
            <PostsPage />
         </Route>

         <Route exact path="/tasks">
            <ToDosPage />
         </Route>
      </Switch>
   )
}

export default AppRoutes