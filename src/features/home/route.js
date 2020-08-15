import { WelcomePage, SearchPage } from './';

export default {
  path: '',
  childRoutes: [
    { path: 'welcome-page', component: WelcomePage, isIndex: true },
    { path: 'search', component: SearchPage },
  ],
};