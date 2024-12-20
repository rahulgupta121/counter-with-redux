import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CookieConsent from "react-cookie-consent";

import {store} from './app/store';
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
    <CookieConsent
  location="bottom"
  buttonText="I Understand"
  cookieName="myAwesomeCookieName2"
  style={{ background: "rgb(29 152 193)", color:"black", }}
  buttonStyle={{ color: "black", fontSize: "13px" }}
  expires={30}
>
  This website uses cookies from us and our business partners to enhance your browsing experience. For more
  information, including how to manage your cookie settings, please check our <a as="/">Privacy Policy</a> and <a as="/">Cookie Policy</a>.
  
</CookieConsent>
    <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
