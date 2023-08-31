// components/Layout.js
import React from "react";

const Layout = ({ children }) => {
  return (
    <html className="h-full bg-white">
      <body className="h-full">{children}</body>
    </html>
  );
};

export default Layout;
