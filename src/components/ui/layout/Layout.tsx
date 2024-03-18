import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";

const Layout = () => {
  return (
    <>
      <div className="header">
        <Header />
      </div>

      <div className="app-content">
        <Outlet />
      </div>

      <div className="footer">
        <Footer />
      </div>
    </>
  );
};

export default Layout;
