import React, {useState, useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import "../styles/App.scss";
import "../styles/Home.scss";
import {
  Container,
  Carousel,
  CardDeck,
  Col,
  Card,
  Jumbotron,
} from "react-bootstrap";
import {Link} from "react-router-dom";

export default function Home(props) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  // a value has to be put in as an inisial state or the app breaks!
  const [recipe, setRecipe] = useState(null);
  const [random, setRandom] = useState(null);
  const [three, setThree] = useState(null);

  //gets a recipe and sets recipe
  useEffect(() => {
    const fetchLiked = async () => {
      const result = await axios.get("https://stark-shelf-20245.herokuapp.com/api/recipes/20");
      const recipe = result.data;
      setRecipe(recipe);
    };
    const fetchRandom = async () => {
      const result = await axios.get("https://stark-shelf-20245.herokuapp.com/api/twists?random=1");
      console.log(result);
      const recipe = result.data;
      setRandom(recipe);
    };
    const fetchThreeRecent = async () => {
      const result = await axios.get("https://stark-shelf-20245.herokuapp.com/api/recipes?three=1");
      const recipe = result.data;
      setThree(recipe);
    };
    fetchRandom();
    fetchLiked();
    fetchThreeRecent();
  }, []);

  if (three && random && recipe) {
    return (
      <>
        <Container fluid>
          <Carousel
            activeIndex={index}
            onSelect={handleSelect}
            className="home-carousel"
          >
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={three[0].meal_image}
                alt="Recipe"
              />
              <Carousel.Caption className="carousel-caption">
                <Link to={`/recipes/${three[0].id}`} id="carousel-link">
                  <h3>{three[0].name}</h3>
                  <h6>Meal region: {three[0].region}</h6>
                  <h6>Meal type: {three[0].meal_type}</h6>
                </Link>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={three[1].meal_image}
                alt="Recipe"
              />
              <Carousel.Caption>
                <Link to={`/recipes/${three[1].id}`} id="carousel-link">
                  <h3>{three[1].name}</h3>
                  <h6>Meal region: {recipe.region}</h6>
                  <h6>Meal type: {recipe.meal_type}</h6>
                </Link>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={three[2].meal_image}
                alt="Recipe"
              />
              <Carousel.Caption>
                <Link to={`/recipes/${three[2].id}`} id="carousel-link">
                  <h3>{three[2].name}</h3>
                  <h6>Meal region: {three[2].region}</h6>
                  <h6>Meal type: {three[2].meal_type}</h6>
                </Link>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>

          {/* Popular recipes */}
          <CardDeck>
            <Col>
              <Jumbotron>
                <Container fluid>
                  <h5>Today's most popular recipe:</h5>
                </Container>
              </Jumbotron>
              <Card>
                <Card.Img variant="top" src={recipe.meal_image} />
                <Card.Body>
                  <Card.Title>{recipe.name}</Card.Title>
                  <Card.Link href={`/recipes/${recipe.id}`} className="card-link">
                    View this recipe
                  </Card.Link>
                </Card.Body>
              </Card>
            </Col>

            {/* Featured twist */}
            <Col>
              <Jumbotron>
                <Container fluid>
                  <h5>This twist may add something special:</h5>
                </Container>
              </Jumbotron>
              <Card>
                <Card.Img variant="top" src={random.meal_image} />
                <Card.Body>
                  <Card.Title>{random.name}</Card.Title>
                  <Card.Text>{random.content}</Card.Text>
                  <Card.Link href={`/recipes/${random.id}`} className="card-link">
                    View this twist
                  </Card.Link>
                </Card.Body>
              </Card>
            </Col>
          </CardDeck>
        </Container>
      </>
    );
  }
  return <h3>loading</h3>;
}
