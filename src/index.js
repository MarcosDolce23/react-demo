import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { StyledEngineProvider } from '@mui/material/styles';

import {
  BrowserRouter as Router,
  useRoutes,
} from "react-router-dom";

import ErrorPage from './error-page';
import Contact from './contact';
import About from './about';
import DetailsView from './detailsView';

const Raiz = () => {
  let routes = useRoutes([
    {path: "/", element: <App />, errorElement: <ErrorPage />},
    {path: "about", element: <About />},
    {path: "contact", element: <Contact />},
    {path: "details/:id", element: <DetailsView />}
  ]);
  return routes;
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <Router>
        <Raiz />
      </Router>
    </StyledEngineProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
