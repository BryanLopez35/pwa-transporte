import React from "react";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";
import ScrollToTop from "./Buttons/ScrollToUp";

export default function Layout(props) {
  return (
    <div className="App">
      <Navbar />
      {props.children}
      <ScrollToTop />
      <Footer />
    </div>
  );
}
