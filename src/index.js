import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import Todolist from './todoList';
// import Admintion from './admintion'
// import * as serviceWorker from './serviceWorker';
// import Todolist from './pages/todoList'
import store from './store2'
import TodoList from './pages/todoListTwo/todoList'
import {Provider} from 'react-redux'

const App =(
    <Provider store={store}>
        <TodoList></TodoList>
    </Provider>
)

ReactDOM.render(App, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
