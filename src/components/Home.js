import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/App.scss";
import { Container, Carousel, Row, Col, Card} from "react-bootstrap";

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
  // a value has to be put in as an inisial state or the app breaks!
  const [recipe, setRecipe] = useState(0);
  const [twist, setTwist] = useState(0);
  const [random, setRandom] = useState(0);

  //gets a recipe and sets recipe
  useEffect(() => {
    const fetchLiked = async () => {
      //this variable needs to be hard coded to the search bar?
      const result = await axios.get("/api/recipes/1");
      const recipe = (result.data.recipe);
      const twist = (result.data.random)
      setRecipe(recipe);
      setTwist(twist);
    };
    const fetchRandom = async () => {
      //this variable needs to be hard coded to the search bar?
      const result = await axios.get("/api/recipes?random=1");
      const recipe = (result.data.recipe);
      
      setRandom(recipe);
    };
    fetchRandom();
    fetchLiked();

  }, []);

  return (
    <>
      <ControlledCarousel />
      <Container mw="100">
        <Row>
          <Col sm="6">
            <p>Fork It Favorites</p>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={recipe.meal_image} />
            <Card.Body>
              <Card.Title>{recipe.name}</Card.Title>
              <Card.Link href={`/recipes/${recipe.id}`} variant="primary">View this recipe</Card.Link>
            </Card.Body>
          </Card>
          </Col>
          <Col sm="6">
            <p>Random Twists</p>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={random.meal_image} />
            <Card.Body>
              <Card.Title>{twist.name}</Card.Title>
              <Card.Link href={`/recipes/${random.id}`} variant="primary">{random.name}</Card.Link>
            </Card.Body>
          </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
