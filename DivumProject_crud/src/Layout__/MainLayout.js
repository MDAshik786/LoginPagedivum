import React from "react";
import Header from '../Header/Header'

const MainLayout = ({ children, rerender, renrendering }) => {
  return (
    <div>
      <Header rerender={rerender} renrendering={renrendering} />
      <div>{children}</div>
    </div>
  );
};

export default MainLayout;
