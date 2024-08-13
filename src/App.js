import React from "react";
import { Container } from "react-bootstrap";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <Container></Container>
      <div>
        <Footer />
      </div>
    </>
  );
}
