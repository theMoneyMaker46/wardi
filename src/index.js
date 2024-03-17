import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { GoogleOAuthProvider } from '@react-oauth/google';


ReactDOM.render(
    <GoogleOAuthProvider clientId="650350096302-slvm35r2jkjvb6m5epjbbmk3nkkjfrnm.apps.googleusercontent.com">
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </GoogleOAuthProvider>
    ,document.getElementById('root')
);

reportWebVitals();
