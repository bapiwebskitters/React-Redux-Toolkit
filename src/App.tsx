import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import Preloader from "./components/common/Preloader";
import AOS from "aos";
import ScrollTopButton from "./components/common/ScrollTopButton";
import NavMenuScrollSpy from "./components/common/NavMenuScrollSpy";
import Layout from "./components/Layout/Layout";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "aos/dist/aos.css";
import "glightbox/dist/css/glightbox.min.css";
import "swiper/swiper-bundle.css";
import "./styles/styles.scss";

const App: React.FC = () => {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 600,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }, []);

  return (
    <Router>
      <Preloader />
      <ScrollTopButton />
      <NavMenuScrollSpy />
      <Layout>
        <AppRoutes />
      </Layout>
    </Router>
  );
};

export default App;
