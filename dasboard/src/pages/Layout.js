import React from "react";
import Header from "../components/Headers/Index";
import Sidebar from "../components/Sidebar/Index";

const Layout = (props) => {
  const children = React.Children.map(props.children, (child, index) => {
    return React.cloneElement(child, { index });
  });
  return (
    <>
      <Sidebar />
      <main class="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
          <Header/>
          <div class="container-fluid py-4">
          {children}
          </div>
      </main>
      
    </>
  );
};

export default Layout;
