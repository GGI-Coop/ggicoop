import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <meta property="og:title" content='Growing Globe Immigration'/>
    <meta property="og:image" content="../public/favicon.png"/>
    <meta property="og:description" content="Embark on your journey to Canada with unwavering confidence, guided by GGI's accomplished team of Registered Canadian Immigration Consultants (RCICs). Our seasoned professionals are dedicated to providing personalized support and unmatched expertise, ensuring you navigate the intricate immigration process with ease. Whether you're a skilled professional seeking career opportunities, a student pursuing quality education, or reuniting with loved ones, GGI stands as your resolute partner for a seamless transition to Canada. Trust in our experience and commitment to transform your Canadian dream into a reality, as we guide you through every step of your transformative journey."/>
    <meta property="og:url" content='growingglobeimmigration.com'/>
    <meta property='og:image:width' content='1200' />
    <meta property='og:image:height' content='627' />
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
