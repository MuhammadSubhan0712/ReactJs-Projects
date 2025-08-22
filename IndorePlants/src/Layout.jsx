import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Market from "./Pages/Market";
import About from "./Pages/About";
import Popular from "./Pages/Popular";
import Review from "./Pages/Review";
import Footer from "./Components/Footer";

const Layout = () => {
  return (
    <>
      <Outlet />
      <Navbar />
      <Home />
      <Market />
      <About />
      <Popular />
      <Review />
      <Footer />
    </>
  );
};

export default Layout;
