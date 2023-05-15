import './globals.css'
import Header from './header/Header'
import Footer from './footer/Footer'
import { ApolloClient, createHttpLink, InMemoryCache, gql } from "@apollo/client";
import { setContext } from '@apollo/client/link/context';

// Dependency for accessibility testing
if (typeof window !== 'undefined' && process.env.NODE_ENV !== 'production') {
  const ReactDOM = require('react-dom');
  const axe = require('@axe-core/react');
  axe(React, ReactDOM, 1000);
}

// Page metadata
export const metadata = {
  title: 'Desmond Gilmour',
  description: 'Desmond Gilmour\'s personal website',
}
//TODO make a dark and a light version of the site
//TODO have an AI ping pong game on the site
//TODO add the reduce motion
//TODO add all the effects and the stuff for disabled peoples

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body>
        {children}
      </body>
      
    </html>
  );
}
