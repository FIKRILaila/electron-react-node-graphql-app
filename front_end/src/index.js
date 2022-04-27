import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider
} from "@apollo/client";
import { createUploadLink } from 'apollo-upload-client';

import { AuthContext_Component } from "./store/AuthContext";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: createUploadLink({
    uri: "http://localhost:4000/graphql",
  }),
});


createRoot(document.getElementById("root")).render(
        <React.StrictMode>
          <BrowserRouter>
            <AuthContext_Component>
            <ApolloProvider client={client}>
              <App />
            </ApolloProvider>
            </AuthContext_Component>
          </BrowserRouter>
          </React.StrictMode>,

);