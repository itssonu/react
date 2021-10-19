import Footer from "./Footer.js";
import Navbar from "./Navbar.js";
import Sidebar from "./Sidebar.js";
// import ContentWrapper from "./ContentWrapper.js";
import Preloader from "./Preloader.js";

const Layout = (props) => {
  return (
    <div className="wrapper">
      {/* Preloader */}
      <Preloader />
      {/* Navbar */}
      <Navbar />
      {/* /.navbar */}
      {/* Main Sidebar Container */}
      <Sidebar />
      {/* Content Wrapper. Contains page content */}
      <div className="content-wrapper">{props.children}</div>
      {/* /.content-wrapper */}
      <Footer />
    </div>
  );
};

export default Layout;
