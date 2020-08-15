// This is the JSON way to define React Router rules in a Rekit app.
// Learn more from: http://rekit.js.org/docs/routing.html

import { Layout, VideosPage, VideoSinglePage, VideosByCategoryPage } from './';

export default {
  path: 'videos',
  component: Layout,
  childRoutes: [
    { path: '', component: VideosPage },
    { path: ':id', component: VideoSinglePage },
    { path: 'category/:category', component: VideosByCategoryPage }
  ],
};
