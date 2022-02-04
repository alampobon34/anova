import React from "react";
import { Figure, Container,Image } from "react-bootstrap";
import ControlledCarousel from "../components/ControlledCarousel/ControlledCarousel";
function Home() {
  return (
    <div>
      <ControlledCarousel />
      <Container className="pt-2">
        <Image src="carousel1.png" className="img-fluid w-100"/>
      </Container>
    </div>
  );
}

export default Home;
