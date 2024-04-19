import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';
import Appp from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
    domain="dev-2mgbgxm3b0scb3xq.us.auth0.com"
    clientId="Q1vvIszbg39DJqnjJp6fqiw5GsfHIbek"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <Appp />
  </Auth0Provider>,
  </React.StrictMode>
);

