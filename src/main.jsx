// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

const domain = "dev-2hxcdeqiw1noddcd.us.auth0.com"; // Replace with Auth0 domain
const clientId = "ers0vWa8LMxiO1yIPVOfmPQKYyQLuZYv"; // Replace with Auth0 client ID

ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain={domain}
    clientId={clientId}
    authorizationParams={{
      redirect_uri: window.location.origin + "/callback",
    }}
  >
    <App />
  </Auth0Provider>
);
