import React, {useState, useEffect} from "react";
import {
  DropdownButton,
  Card,
  CardDeck,
  Container,
  Col,
  Button,
  Form,
} from "react-bootstrap";
import {Link} from "react-router-dom";
import {TwistModal} from "./Modal";
import axios from "axios";
import "../styles/Recipes.scss";
import "../styles/App.scss";

const Recipes = (props) => {
  let id = props.match.params.recipe;

  const [recipe, setRecipe] = useState("");
  const [twist, setTwist] = useState("");
  const [user, setUser] = useState("");
  const [isModalOpen, setModalOpen] = useState(false);


  // Make a request for a recipe, random twist, and user given a recipe id
  useEffect(() => {
    const randomizer = Math.floor(Math.random() * 100);
    const promiseRecipes = axios.get(`/api/recipes/${id}`);
    const promiseUsers = axios.get(
      `/api/users/${randomizer}?twists/${id}&&recipes${id}`
    );
    const promises = [promiseRecipes, promiseUsers];
    // const promises = [promiseRecipes];

    Promise.all(promises)
      .then((responseArr) => {
        console.log(responseArr[0]);
        console.log(responseArr[1]);
        setRecipe(responseArr[0].data.recipe);
        setTwist(responseArr[0].data.random);
        setUser(responseArr[1].data.user);
      })
      .catch(function(error) {
        console.log(error);
      });
  }, [id]);

  // Find a random twist
  const randomTwist = () => {
    const randomizer = Math.floor(Math.random() * 100);
    const promiseRecipes = axios.get(`/api/recipes/${id}`);
    const promiseUsers = axios.get(`/api/users/${randomizer}`);
    const promises = [promiseRecipes, promiseUsers];

    Promise.all(promises).then((responseArr) => {
      // console.log(responseArr[0].data, "responseArr[0] is:");
      console.log(responseArr[1].data);
      // setTwist(responseArr[1].data.twist);
      //this allows us to pick a user and change the handle of said user
      setUser(responseArr[1].data.user);
    });
  };

  // Toggle for modals
  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    // Recipe options menu
    <>
      <Container fluid>
        <TwistModal show={isModalOpen} onClose={toggleModal} />
        <Col>
          <DropdownButton
            title="Recipe Options"
            align="right"
            className="recipe-dropdown"
          >
            <Link to="#/action-1">Share</Link><br />
            <Link to="#/action-2">Rate</Link><br />
            {/* Create twist using modal */}
            <Link onClick={toggleModal}>Create Twist</Link><br />
            <Link to="#/action-3">Add to Favorites</Link><br />
          </DropdownButton>
        </Col>

        {/* // Recipe display */}
        <CardDeck className="recipe-columns">
          <Card className="recipe-card">
            <Card.Img src={`${recipe.meal_image}`} />
            <Card.Body className="recipe-body">
              <Card.Header as="h5" className="text-center">
                {`${recipe.name}`}{" "}
              </Card.Header>
              <Card.Text className="recipe-text">
                {`${recipe.instructions}`}
              </Card.Text>
            </Card.Body>
          </Card>
          {/* Twist display */}
          <Card className="text-center twist-card">
            <Card.Header as="h5">User Twists!</Card.Header>
            <Card.Body>
              <Card.Title>
                {user.handle} suggests including the following twist:
              </Card.Title>
              <Card.Text>{twist.content}</Card.Text>
              <Button onClick={() => randomTwist()} variant="primary">
                Find a random Twist
              </Button>
            </Card.Body>
            <Form>
              <Form.Group as={Col}>
                <Form.Label>Find Twists by User</Form.Label>
                <Form.Control
                  size="md"
                  type="text"
                  placeholder="Enter a user handle"
                />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>Search by Twist Type</Form.Label>
                <Form.Control as="select" id="inlineFormCustomSelect" custom>
                  <option value="0">Select an option</option>
                  <option value="1">Ingredient Replacement</option>
                  <option value="2">Cooking Time</option>
                  <option value="3">Healthy Options</option>
                  <option value="4">Add Something Extra</option>
                  <option value="5">Take Something Out</option>
                </Form.Control>
              </Form.Group>

              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Disable Twists" />
              </Form.Group>
            </Form>
          </Card>
        </CardDeck>
      </Container>
    </>
  );
};

export default Recipes;
