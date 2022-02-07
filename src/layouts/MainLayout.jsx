import React from "react";
import Footer from "../commons/Footer";
import Header from "../commons/Header";

const MainLayout = ({ children }) => {
  return (
    <div className="flex h-[100vh] flex-col ">
      <Header />
      <div className="flex-grow-1 flex overflow-hidden">{children}</div>
      <Footer />
    </div>
  );
};

export default MainLayout;
