import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { GoogleOAuthProvider } from '@react-oauth/google';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <GoogleOAuthProvider clientId="650350096302-slvm35r2jkjvb6m5epjbbmk3nkkjfrnm.apps.googleusercontent.com">
            <App />
    </GoogleOAuthProvider>
);

reportWebVitals();
