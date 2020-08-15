// This is the JSON way to define React Router rules in a Rekit app.
// Learn more from: http://rekit.js.org/docs/routing.html

import { CoursesByCategoryPage } from './';
import CoursesPage from './CoursesPage';
import Layout from './Layout'
export default {
  path: 'courses',
  component: Layout,
  childRoutes: [
    { path: '', component: CoursesPage, isIndex: true },
    { path: ':id', component: CoursesByCategoryPage }
  ],
};
