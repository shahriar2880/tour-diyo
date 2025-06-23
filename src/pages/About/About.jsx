import React from "react";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./about.css";
import AboutImg from "../../assets/images/about/aboutimg.png";

import icons1 from "../../assets/images/icons/destination.png";
import icons2 from "../../assets/images/icons/best-price.png";
import icons3 from "../../assets/images/icons/quick.png";

const About = () => {
  return (
    <>
      <Breadcrumbs title="About us" pagename="About us" childnamed="d-none" />
      <section className="about">
        <Container>
          <Row>
            <Col lg="8" md="8">
              <div className="about-content">
                <div className="about-image position-relative">
                  <img src={AboutImg} alt="" className="img-fluid rounded-4" />
                  <div className="about-image-content position-absolute top-70 end-0 bottom-0 p-md-2 m-2 p-3  rounded-4 shadow-sm ">
                    <h3 className="text-center fw-bold text-white">
                      WE ARE BEST FOR TOURS TRAVEL !
                    </h3>
                  </div>
                </div>
                <h2 className="h2 pt-4 pb-2 font-bold">
                  HOW WE ARE BEST FOR TRAVEL !
                </h2>
                <p className="body-text mb-2">
                  <span className="font-bold">Tour Dojo!</span> is a trusted
                  travel agency offering exceptional experiences across the
                  world’s most iconic destinations — including the Maldives,
                  Goa, Bali, Dubai, London, New York, and Santorini. trusted by
                  all and our previous guests.{" "}
                </p>
                <p className="body-text mb-2">
                  Whether you crave the crystal-clear beaches of the Maldives,
                  the vibrant nightlife of Goa, the serene temples of Bali, the
                  luxury of Dubai, the timeless charm of London, the urban
                  energy of New York, or the whitewashed cliffside views of
                  Santorini, we specialize in crafting journeys that fit your
                  style, budget, and dreams. Our expert team is available <span className="font-bold">24×7</span>
                  to assist from the moment your travel idea takes shape —
                  offering tailored advice, budgeting help, and full-service
                  support throughout your trip.
                </p>
                <p className="body-text mb-2">
                  With <span className="font-bold">100+</span> curated packages across Asia, Europe, the Middle
                  East, and North America, we serve travelers of all kinds —
                  from solo adventurers to family groups and honeymooners. Since
                  our establishment in 2021, Weekend Monks has proudly catered
                  to over 10,000 happy travelers, making every journey smooth,
                  safe, and unforgettable.
                </p>
              </div>
            </Col>

            <Col lg="4" md="4">
              <Card className="border-0 shadow-sm rounded-3 mb-4">
                <Card.Body className="text-center">
                  <div className="d-flex justify-content-center align-items-center my-2 ">
                    <div className="bg-light shadow-sm bg-opacity-10  rounded-circle mb-2 flex-centered p-2">
                      <img src={icons1} height={'80px'} width={'80px'} alt="" className="img-fluid" />
                    </div>
                  </div>
                  <Card.Title className="title fw-bold">
                    50+ Destinations
                  </Card.Title>
                  <p className="mb-2 body-text">
                    Iure doloremque saepe? Ultrices mi aliquam dis tempore
                    incididunt sint, cumque dis temp!
                  </p>
                </Card.Body>
              </Card>

              <Card className="border-0 shadow-sm rounded-3 mb-4">
                <Card.Body className="text-center">
                  <div className="d-flex justify-content-center align-items-center my-2 ">
                    <div className="bg-light shadow-sm bg-opacity-10 text-info rounded-circle mb-2 flex-centered p-2">
                      <img src={icons2} height={'80px'} width={'80px'}  alt="" className="img-fluid" />
                    </div>
                  </div>
                  <Card.Title className="title fw-bold">
                    Best Price In The Industry
                  </Card.Title>
                  <p className="mb-2 body-text">
                    Iure doloremque saepe? Ultrices mi aliquam dis tempore
                    incididunt sint, cumque dis temp!
                  </p>
                </Card.Body>
              </Card>

              <Card className="border-0 shadow-sm rounded-3 mb-4">
                <Card.Body className="text-center">
                  <div className="d-flex justify-content-center align-items-center my-2 ">
                    <div className="bg-light shadow-sm bg-opacity-10 text-info rounded-circle mb-2 flex-centered p-2">
                      <img src={icons3} height={'80px'} width={'80px'}  alt="" className="img-fluid" />
                    </div>
                  </div>
                  <Card.Title className="title fw-bold">
                    Super Fast Booking
                  </Card.Title>
                  <p className="mb-2 body-text">
                    Iure doloremque saepe? Ultrices mi aliquam dis tempore
                    incididunt sint, cumque dis temp!
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default About;
