import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root';
import * as serviceWorker from './serviceWorker';
import './styles/index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import "video-react/dist/video-react.css"; // import css

import { strapi } from './axios'

// strapi.login('admin@strapi.io', 'Admin123**');

ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

if (module.hot) {
    module.hot.accept()
}
