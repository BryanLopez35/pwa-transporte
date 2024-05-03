import React from "react";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";

export default function Layout(props) {
  return (
    <div className="App">
      <Navbar />

      {props.children}
      <Footer />
    </div>
  );
}
