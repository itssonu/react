import Footer from "./Footer.js";
import Navbar from "./Navbar.js";
import Sidebar from "./Sidebar.js";
import React from "react";
// import Preloader from "./Preloader.js";

class AdminLayout extends React.Component{
render() {
  return (
    <>
      <div className="wrapper">
        {/* Preloader */}
        {/* <Preloader /> */}
        {/* Navbar */}
        <Navbar />
        {/* /.navbar */}
        {/* Main Sidebar Container */}
        <Sidebar />
        {/* Content Wrapper. Contains page content */}
        <div className="content-wrapper">{this.props.children}</div>
        {/* /.content-wrapper */}
        <Footer />
      </div>
    </>
  );
}
};

export default AdminLayout;
