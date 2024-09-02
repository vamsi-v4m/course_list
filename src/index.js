import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { myStore } from './Store';
import { GoogleOAuthProvider } from '@react-oauth/google';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GoogleOAuthProvider clientId='758743786746-p2cqb65s480s30nqojh4koomnchvtm57.apps.googleusercontent.com'>
    <Provider store={myStore}>
      <App />
    </Provider>
  </GoogleOAuthProvider>
);

