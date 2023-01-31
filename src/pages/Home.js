import React from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Menu from "../components/Menu";
import Services from "../components/Services";

const Home = () => {
  return (
    <div>
      <Header />
      <About />
      <Services />
      <Menu />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
