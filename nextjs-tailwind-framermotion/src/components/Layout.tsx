import React, { FunctionComponent } from "react";

import Header from "./Header";

// eslint-disable-next-line react/prop-types
const Layout: FunctionComponent = ({ children }) => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
      <Header />
      {children}
    </div>
  );
};

export default Layout;
