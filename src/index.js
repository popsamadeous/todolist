import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import App from './Components/App';
import './CSS/ToDo.css'


ReactDOM.render(<App />, document.getElementById('root'));
serviceWorkerRegistration.register();
