import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/App.scss";
import { Container, Carousel, Row, Col, Image } from "react-bootstrap";

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="http://www.fillmurray.com/300/100"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="http://www.fillmurray.com/300/100"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="http://www.fillmurray.com/300/100"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default function Home() {
  // const [message, setMessage] = useState("Click to fetch data!")
  // a value has to be put in as an inisial state or the app breaks!!
  const [data, setData] = useState(0);
  const [recipe, setRecipe] = useState(0);

  //this gets a twist
  useEffect(() => {
    axios
      .get("/api/twists/1")
      .then((result) => {
        console.log(result.data);
        setData(result.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  //gets a recipe and sets recipe
  useEffect(() => {
    const fetchTwists = async () => {
      //this variable needs to be hard coded to the search bar?
      const result = await axios.get("/api/data?search=Three Fish");
      const body = JSON.parse(result.data.message);
      console.log(body);
      setRecipe(body);
    };
    fetchTwists();
  }, []);

  return (
    <>
      <ControlledCarousel />
      <Container mw="100">
        <Row>
          <Col sm="6">
            <p>Fork It Favorites</p>
            <h3>Name: {recipe.name}</h3>
            <Image width="50%" src={recipe.meal_image} responsive />
          </Col>
          <Col sm="6">
            <p>Random Twists</p>
            <Image
              height="75%"
              src="http://www.fillmurray.com/500/500"
              alt=""
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}
