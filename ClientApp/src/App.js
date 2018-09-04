import React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Home from './components/Home';
import Movies from './components/movies';
import MovieDetails from './components/movies/MovieDetails';

export default () => (
  <Layout>
        <Route exact path='/' component={Home} />
        <Route exact path='/search' component={Movies} />
        <Route exact path='/movie/:movie_id' component={MovieDetails} />
  </Layout>
);
