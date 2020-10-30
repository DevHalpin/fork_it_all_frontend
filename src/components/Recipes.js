import React, { useState, useEffect } from "react";
import {
  Card,
  CardDeck,
  Container,
  Col,
  Button,
  Form,
  Alert,
} from "react-bootstrap";
import { TwistCreateModal, TwistEditModal } from "./Modal";
import axios from "axios";
import "../styles/Recipes.scss";
import "../styles/App.scss";

const Recipes = (props) => {
  let id = props.match.params.recipe;
  const [recipe, setRecipe] = useState({});
  const [showAlert, setShowAlert] = useState(false);

  // Modal state
  const [isCreateModalOpen, setCreateModalOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);

  // Twist display state
  const [showTwists, setShowTwists] = useState(true);

  // Make a request for a recipe, random twist, and user given a recipe id
  useEffect(() => {
    axios.get(`/api/recipes/${id}?random=1`).then((response) => {
      setRecipe(response.data.recipe);
    });
  }, [id]);

  // Find a random twist
  const randomTwist = () => {
    axios.get(`/api/recipes/${id}?random=1`).then((response) => {
      setRecipe(response.data.recipe);
    });
  };

  // Toggle for modals
  const toggleCreateModal = () => {
    setCreateModalOpen(!isCreateModalOpen);
  };
  const toggleEditModal = () => {
    setEditModalOpen(!isEditModalOpen);
  };

  const handleFavoriteAlert = () => {
    setShowAlert(true);
  };

  const handleFavorite = () => {
    axios
      .put(`/api/twists/${recipe.id}/favorite?type=favorite`, {
        twist_id: `${recipe.id}`,
      })
      .then(() => handleFavoriteAlert());
  };

  // if (recipe) {
  return (
    // Recipe options menu
    <>
      <Container fluid>
        {showAlert && (
          <Alert
            onClose={() => setShowAlert(false)}
            dismissible
            variant="primary"
          >
            Added to favorites!
          </Alert>
        )}
        {/* Twist modals */}
        <TwistCreateModal
          show={isCreateModalOpen}
          onHide={toggleCreateModal}
          user={props.user}
          recipe={props.match.params.recipe}
        />
        <TwistEditModal show={isEditModalOpen} onHide={toggleEditModal} />

        {/* Show twists when disabled */}
        {showTwists === false ? (
          <Button align="right" onClick={setShowTwists}>
            Enable Twists
          </Button>
        ) : null}

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
          <Card
            className={
              showTwists ? "text-center twist-card" : "twist-card-hide"
            }
          >
            <Card.Header as="h5">User Twists!</Card.Header>
            <Card.Body>
              <Card.Title>
                {recipe.handle !== undefined
                  ? `${recipe.handle} suggests including the following twist:`
                  : "No twists exist for this recipe"}
              </Card.Title>
              <Card.Text>
                {recipe.content !== undefined ? recipe.content : null}
              </Card.Text>
              {/* Twist randomize and social options */}
              <Button
                className="twist-button-random"
                onClick={() => randomTwist()}
                variant="primary"
              >
                Randomize
              </Button>
              <br />
              <Button className="twist-buttons" variant="primary">
                Share
              </Button>
              <Button className="twist-buttons" variant="primary">
                Rate
              </Button>
              <Button
                className="twist-buttons"
                variant="primary"
                onClick={() => {
                  handleFavorite();
                }}
              >
                Favorite
              </Button>
              <Button
                className="twist-buttons"
                onClick={toggleEditModal}
                variant="primary"
              >
                Edit
              </Button>
              <Button
                className="twist-buttons"
                onClick={toggleCreateModal}
                variant="primary"
              >
                Create
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
                <Form.Check
                  onClick={() => setShowTwists(false)}
                  type="checkbox"
                  label="Disable Twists"
                />
              </Form.Group>
            </Form>
          </Card>
        </CardDeck>
      </Container>
    </>
  );
  // }
  // return <h3>Loading</h3>;
};

export default Recipes;
