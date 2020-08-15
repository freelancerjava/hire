// This is the JSON way to define React Router rules in a Rekit app.
// Learn more from: http://rekit.js.org/docs/routing.html

import {
} from './';
import CategoryPage from './CategoryPage';

export default {
  path: 'categories',
  component: CategoryPage,
  childRoutes: [
  ],
};
