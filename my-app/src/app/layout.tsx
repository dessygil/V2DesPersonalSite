import './globals.css'

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


export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
