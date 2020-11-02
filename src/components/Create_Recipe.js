import React, { useState, useEffect } from "react";
import {
  Card,
  CardDeck,
  Container,
  Col,
  Button,
  Form,
  Alert,
  InputGroup,
  FormGroup,
  FormControl,
} from "react-bootstrap";

import axios from "axios";
import "../styles/Recipes.scss";
import "../styles/App.scss";

const testRecipe = {
  recipe: {
    name: "",
    region: "",
    instructions: "",
    meal_image: "",
    meal_type: "",
    video_url: "",
    ingredient1: "",
    ingredient2: "",
    ingredient3: "",
    ingredient4: "",
    ingredient5: "",
    ingredient6: "",
    ingredient7: "",
    ingredient8: "",
    ingredient9: "",
    ingredient10: "",
    ingredient11: "",
    ingredient12: "",
    ingredient13: "",
    ingredient14: "",
    ingredient15: "",
    ingredient16: "",
    ingredient17: "",
    ingredient18: "",
    ingredient19: "",
    ingredient20: "",
    measure1: "",
    measure2: "",
    measure3: "",
    measure4: "",
    measure5: "",
    measure6: "",
    measure7: "",
    measure8: "",
    measure9: "",
    measure10: "",
    measure11: "",
    measure12: "",
    measure13: "",
    measure14: "",
    measure15: "",
    measure16: "",
    measure17: "",
    measure18: "",
    measure19: "",
    measure20: "",
  },
};

const Create_Recipes = (props) => {
  let id = props.match.params.recipe;
  let twistId = props.match.params.twist;
  const userHandle = props.user.handle;
  const [recipe, setRecipe] = useState({});
  const [twist, setTwist] = useState({});
  const [favorites, setFavorites] = useState([]);
  const [favorited, setFavorited] = useState(false);

  // Alert state
  const [showFaveAlert, setShowFaveAlert] = useState(false);

  // Modal state
  const [isCreateModalOpen, setCreateModalOpen] = useState(false);

  // Twist display state
  const [showTwists, setShowTwists] = useState(true);

  const checkFavorited = () => {
    if (favorites.includes(twist.id) && favorited === false) {
      setFavorited(true);
    } else if (!favorites.includes(twist.id) && favorited === true) {
      setFavorited(false);
    }
  };

  // Make a request for a recipe, random twist, and user given a recipe id
  useEffect(() => {
    if (twistId !== undefined) {
      axios.get(`/api/recipes/${id}?twist=${twistId}`).then((response) => {
        setTwist(response.data.recipe);
      });
    } else {
      axios.get(`/api/recipes/${id}?random=1`).then((response) => {
        setTwist(response.data.recipe);
      });
    }
    axios.get(`/api/recipes/${id}`).then((response) => {
      setRecipe(response.data.recipe);
    });
    axios.get("/api/faveTwists").then((response) => {
      const favoriteArr = [];
      response.data.forEach((favorite) => {
        favoriteArr.push(favorite.twist_id);
      });
      setFavorites(favoriteArr);
    });
  }, [id, twistId]);

  if (favorites.length > 0 && twist && twist.id !== undefined) {
    checkFavorited();
  }

  // Find a random twist
  const randomTwist = () => {
    axios.get(`/api/recipes/${id}?random=1`).then((response) => {
      setTwist(response.data.recipe);
    });
  };

  // if (recipe) {
  return (
    <>
      <Container fluid>
        {/* Twist modals */}

        {/* // Recipe display */}
        <CardDeck className="recipe-columns">
          <Card className="recipe-card">
            <Card.Img
              src={
                recipe.meal_image !== undefined
                  ? `${recipe.meal_image}`
                  : "https://images.unsplash.com/photo-1571843439991-dd2b8e051966?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
              }
            />
            <Form>
              <Form.Group>
                <Form.File
                  id="exampleFormControlFile1"
                  label="Example file input"
                />
              </Form.Group>
            </Form>
            <Card.Body className="recipe-body">
              <Card.Header as="h5" className="text-center">
                <Form.Group as={Col}>
                  <Form.Label>Enter Recipe Name</Form.Label>
                  <Form.Control
                    size="md"
                    type="text"
                    placeholder="e.g. Huevos Rancheros"
                  />
                </Form.Group>
              </Card.Header>
              <Card.Text className="recipe-text">
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Enter Instructions:</Form.Label>
                  <Form.Control as="textarea" rows={5} />
                  <Form.Label>Enter YouTube link</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="https://www.youtube.com/watch?v=MuajFTgkoHw"
                  />
                  <br />
                </Form.Group>
              </Card.Text>
            </Card.Body>
          </Card>

          {/* Twist display */}
          <Card
            className={
              showTwists ? "text-center twist-card" : "twist-card-hide"
            }
          >
            <Card.Header as="h5">Enter Ingredients and Measures!</Card.Header>
            <Card.Body>
              <Card.Title>
                {twist !== null
                  ? `${twist.handle} suggests including the following twist:`
                  : "No twists exist for this recipe"}
              </Card.Title>
              <Card.Text>{twist !== null ? twist.content : null}</Card.Text>
            </Card.Body>
            <Form>
              <Form.Group as={Col}>
                <Form.Label>Enter Region</Form.Label>
                <Form.Control
                  size="md"
                  type="text"
                  placeholder="Enter Dish Region e.g. French"
                />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Enter Meal Type</Form.Label>
                <Form.Control size="md" type="text" placeholder="e.g. Curry" />
              </Form.Group>

              {/* Form group for ingredients and quantity */}
              <Form>
                <Form.Row className="align-items-center">
                  <Col xs="auto">
                    <Form.Label htmlFor="inlineFormInput" srOnly>
                      Ingredient 1
                    </Form.Label>
                    <Form.Control
                      className="mb-2"
                      id="inlineFormInput"
                      placeholder="Ingredient 1"
                    />
                  </Col>
                  <Col xs="auto">
                    <Form.Label htmlFor="inlineFormInputGroup" srOnly>
                      Username
                    </Form.Label>
                    <InputGroup className="mb-2">
                      <FormControl
                        id="inlineFormInputGroup"
                        placeholder="Measure or Quantity"
                      />
                    </InputGroup>
                  </Col>
                </Form.Row>
                <Form.Row className="align-items-center">
                  <Col xs="auto">
                    <Form.Label htmlFor="inlineFormInput" srOnly>
                      Ingredient 1
                    </Form.Label>
                    <Form.Control
                      className="mb-2"
                      id="inlineFormInput"
                      placeholder="Ingredient 1"
                    />
                  </Col>
                  <Col xs="auto">
                    <Form.Label htmlFor="inlineFormInputGroup" srOnly>
                      Username
                    </Form.Label>
                    <InputGroup className="mb-2">
                      <FormControl
                        id="inlineFormInputGroup"
                        placeholder="Measure or Quantity"
                      />
                    </InputGroup>
                  </Col>
                </Form.Row>
                <Form.Row className="align-items-center">
                  <Col xs="auto">
                    <Form.Label htmlFor="inlineFormInput" srOnly>
                      Ingredient 1
                    </Form.Label>
                    <Form.Control
                      className="mb-2"
                      id="inlineFormInput"
                      placeholder="Ingredient 1"
                    />
                  </Col>
                  <Col xs="auto">
                    <Form.Label htmlFor="inlineFormInputGroup" srOnly>
                      Username
                    </Form.Label>
                    <InputGroup className="mb-2">
                      <FormControl
                        id="inlineFormInputGroup"
                        placeholder="Measure or Quantity"
                      />
                    </InputGroup>
                  </Col>
                </Form.Row>
                <Form.Row className="align-items-center">
                  <Col xs="auto">
                    <Form.Label htmlFor="inlineFormInput" srOnly>
                      Ingredient 1
                    </Form.Label>
                    <Form.Control
                      className="mb-2"
                      id="inlineFormInput"
                      placeholder="Ingredient 1"
                    />
                  </Col>
                  <Col xs="auto">
                    <Form.Label htmlFor="inlineFormInputGroup" srOnly>
                      Username
                    </Form.Label>
                    <InputGroup className="mb-2">
                      <FormControl
                        id="inlineFormInputGroup"
                        placeholder="Measure or Quantity"
                      />
                    </InputGroup>
                  </Col>
                </Form.Row>
                <Form.Row className="align-items-center">
                  <Col xs="auto">
                    <Form.Label htmlFor="inlineFormInput" srOnly>
                      Ingredient 1
                    </Form.Label>
                    <Form.Control
                      className="mb-2"
                      id="inlineFormInput"
                      placeholder="Ingredient 1"
                    />
                  </Col>
                  <Col xs="auto">
                    <Form.Label htmlFor="inlineFormInputGroup" srOnly>
                      Username
                    </Form.Label>
                    <InputGroup className="mb-2">
                      <FormControl
                        id="inlineFormInputGroup"
                        placeholder="Measure or Quantity"
                      />
                    </InputGroup>
                  </Col>
                </Form.Row>
                <Form.Row className="align-items-center">
                  <Col xs="auto">
                    <Form.Label htmlFor="inlineFormInput" srOnly>
                      Ingredient 1
                    </Form.Label>
                    <Form.Control
                      className="mb-2"
                      id="inlineFormInput"
                      placeholder="Ingredient 1"
                    />
                  </Col>
                  <Col xs="auto">
                    <Form.Label htmlFor="inlineFormInputGroup" srOnly>
                      Username
                    </Form.Label>
                    <InputGroup className="mb-2">
                      <FormControl
                        id="inlineFormInputGroup"
                        placeholder="Measure or Quantity"
                      />
                    </InputGroup>
                  </Col>
                </Form.Row>
                <Form.Row className="align-items-center">
                  <Col xs="auto">
                    <Form.Label htmlFor="inlineFormInput" srOnly>
                      Ingredient 1
                    </Form.Label>
                    <Form.Control
                      className="mb-2"
                      id="inlineFormInput"
                      placeholder="Ingredient 1"
                    />
                  </Col>
                  <Col xs="auto">
                    <Form.Label htmlFor="inlineFormInputGroup" srOnly>
                      Username
                    </Form.Label>
                    <InputGroup className="mb-2">
                      <FormControl
                        id="inlineFormInputGroup"
                        placeholder="Measure or Quantity"
                      />
                    </InputGroup>
                  </Col>
                </Form.Row>
                <Form.Row className="align-items-center">
                  <Col xs="auto">
                    <Form.Label htmlFor="inlineFormInput" srOnly>
                      Ingredient 1
                    </Form.Label>
                    <Form.Control
                      className="mb-2"
                      id="inlineFormInput"
                      placeholder="Ingredient 1"
                    />
                  </Col>
                  <Col xs="auto">
                    <Form.Label htmlFor="inlineFormInputGroup" srOnly>
                      Username
                    </Form.Label>
                    <InputGroup className="mb-2">
                      <FormControl
                        id="inlineFormInputGroup"
                        placeholder="Measure or Quantity"
                      />
                    </InputGroup>
                  </Col>
                </Form.Row>
                <Form.Row className="align-items-center">
                  <Col xs="auto">
                    <Form.Label htmlFor="inlineFormInput" srOnly>
                      Ingredient 1
                    </Form.Label>
                    <Form.Control
                      className="mb-2"
                      id="inlineFormInput"
                      placeholder="Ingredient 1"
                    />
                  </Col>
                  <Col xs="auto">
                    <Form.Label htmlFor="inlineFormInputGroup" srOnly>
                      Username
                    </Form.Label>
                    <InputGroup className="mb-2">
                      <FormControl
                        id="inlineFormInputGroup"
                        placeholder="Measure or Quantity"
                      />
                    </InputGroup>
                  </Col>
                </Form.Row>
                <Form.Row className="align-items-center">
                  <Col xs="auto">
                    <Form.Label htmlFor="inlineFormInput" srOnly>
                      Ingredient 1
                    </Form.Label>
                    <Form.Control
                      className="mb-2"
                      id="inlineFormInput"
                      placeholder="Ingredient 1"
                    />
                  </Col>
                  <Col xs="auto">
                    <Form.Label htmlFor="inlineFormInputGroup" srOnly>
                      Username
                    </Form.Label>
                    <InputGroup className="mb-2">
                      <FormControl
                        id="inlineFormInputGroup"
                        placeholder="Measure or Quantity"
                      />
                    </InputGroup>
                  </Col>
                </Form.Row>

                <Button type="submit" className="mb-2">
                  Submit
                </Button>
              </Form>
            </Form>
          </Card>
        </CardDeck>
      </Container>
    </>
  );
  // }
  // return <h3>Loading</h3>;
};

export default Create_Recipes;
