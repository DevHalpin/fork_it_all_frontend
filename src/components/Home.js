import React, {useState, useEffect} from "react";
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

export default function Home(props) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  // const [message, setMessage] = useState("Click to fetch data!")
  // a value has to be put in as an inisial state or the app breaks!
  const [recipe, setRecipe] = useState(null);
  const [random, setRandom] = useState(null);
  const [three, setThree] = useState(null);

  //gets a recipe and sets recipe
  useEffect(() => {
    const fetchLiked = async () => {
      //this variable needs to be hard coded to the search bar?
      const result = await axios.get("/api/recipes/1");
      const recipe = result.data.recipe;
      setRecipe(recipe);
    };
    const fetchRandom = async () => {
      //this variable needs to be hard coded to the search bar?
      const result = await axios.get("/api/twists?random=1");
      const recipe = result.data;
      setRandom(recipe);
    };
    const fetchThreeRecent = async () => {
      // this variable needs to be hard coded to the search bar?
      const result = await axios.get("/api/recipes?three=1");
      const recipe = result.data.recipe;
      setThree(recipe);
    };
    fetchRandom();
    fetchLiked();
    fetchThreeRecent();
  }, []);

  if (three && random && recipe) {
    return (
      <>
        {/* Recipe carousel */}
        <Container fluid>
          <Carousel
            activeIndex={index}
            onSelect={handleSelect}
            className="home-carousel"
          >
            <Carousel.Item>
              <img
                // style={{height: "25em"}}
                className="d-block w-100"
                src={three[0].meal_image}
                alt="Recipe"
              />
              <Carousel.Caption className="carousel-caption">
                <h3>{three[0].name}</h3>
                <h6>Meal region: {three[0].region}</h6>
                <h6>Meal type: {three[0].meal_type}</h6>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                // style={{height: "25em"}}
                className="d-block w-100"
                src={three[1].meal_image}
                alt="Recipe"
              />
              <Carousel.Caption>
                <h3>{three[1].name}</h3>
                <h6>Meal region: {recipe.region}</h6>
                <h6>Meal type: {recipe.meal_type}</h6>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                // style={{height: "25em"}}
                className="d-block w-100"
                src={three[2].meal_image}
                alt="Recipe"
              />
              <Carousel.Caption>
                <h3>{three[2].name}</h3>
                <h6>Meal region: {three[2].region}</h6>
                <h6>Meal type: {three[2].meal_type}</h6>
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
                  <Card.Link href={`/recipes/${recipe.id}`} variant="primary">
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
                  <Card.Link href={`/recipes/${random.id}`} variant="primary">
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
