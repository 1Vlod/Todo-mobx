import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css"
import TodoStore from "./models/todoStore"

import App from './App';

const store = TodoStore.create()


ReactDOM.render(
  <React.StrictMode>
    <App store={store}/>
  </React.StrictMode>,
  document.getElementById('root')
);
