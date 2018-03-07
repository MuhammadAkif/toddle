import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/index.css';
import TodoApp from './components/TodoApp';
import registerServiceWorker from './utils/registerServiceWorker';

ReactDOM.render(<TodoApp />, document.getElementById('root'));
registerServiceWorker();
