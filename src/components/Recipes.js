import React, {useState, useEffect} from "react";
import {
  Card,
  CardDeck,
  Container,
  Col,
  Button,
  Form,
  Alert
} from "react-bootstrap";
import {TwistCreateModal, TwistEditModal} from "./Modal";
import axios from "axios";
import "../styles/Recipes.scss";
import "../styles/App.scss";

const Recipes = (props) => {
  let id = props.match.params.recipe;

  const [recipe, setRecipe] = useState("");
  const [twist, setTwist] = useState("");
  const [user, setUser] = useState("");
  const [temp, setTemp] = useState("");
  const [handle, setHandle] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  // Modal state
  const [isCreateModalOpen, setCreateModalOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);

  // Twist display state
  const [showTwists, setShowTwists] = useState(true);

  // Make a request for a recipe, random twist, and user given a recipe id
  useEffect(() => {
    const randomizer = Math.floor(Math.random() * 100);
    const promiseRecipes = axios.get(`/api/recipes/${id}`);
    const promiseUsers = axios.get(`/api/users/${randomizer}?recipes=${id}`);
    const promises = [promiseUsers, promiseRecipes];

    Promise.all(promises)
      .then((responseArr) => {
        console.log(responseArr[0]);
        console.log(responseArr[1]);
        //this is the correct user id
        // setTemp(responseArr[0].data.twists[0].user_id);
        // console.log(twist);
        setRecipe(responseArr[1].data.recipe);
        setTwist(responseArr[0].data.twists[0]);
        setUser(responseArr[0].data.user);
        console.log(user);
        console.log("twists", twist === undefined);
        // setTemp(responseArr[0].data.twists[0].user_id);
      })
      // .then(() => {
      //   console.log(temp);
      //   axios.get(`/api/users/${temp}?recipes=${id}`).then((response) => {
      //     console.log(response.data.user);
      //     setHandle(response.data.user);
      //   });
      // })
      .catch(function(error) {
        console.log(error);
      });
  }, [id]);

  //theres nothing for it we have to make another axios call - if random doesnt have an associated twist
  //if twist.user_id != user.id?
  const getUserifRandomFails = () => {
    console.log(temp);
    axios.get(`/api/users/${temp}?recipes=${id}`).then((response) => {
      console.log(response.data.user);
      setUser(response.data.user);
    });
  };

  // Find a random twist
  const randomTwist = () => {
    const randomizer = Math.floor(Math.random() * 100);
    const promiseRecipes = axios.get(`/api/recipes/${id}`);
    const promiseUsers = axios.get(`/api/users/${randomizer}?recipes=${id}`);
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
    axios.put(`/api/twists/${twist.id}/favorite?type=favorite`, {twist_id: `${twist.id}`})
      .then(() =>
        handleFavoriteAlert()
      );
  };


  // if (user) {
  return (
    // Recipe options menu
    <>
      <Container fluid>

        {showAlert && <Alert onClose={() => setShowAlert(false)} dismissible variant="primary">Added to favorites!</Alert>}
        {/* Twist modals */}
        <TwistCreateModal show={isCreateModalOpen} onHide={toggleCreateModal} />
        <TwistEditModal show={isEditModalOpen} onHide={toggleEditModal} />

        {/* Show twists when disabled */}
        {showTwists === false ? (<Button align="right" onClick={setShowTwists}>Enable Twists</Button>) : null}

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
          <Card className={showTwists ? "text-center twist-card" : "twist-card-hide"}>
            <Card.Header as="h5">User Twists!</Card.Header>
            <Card.Body>
              <Card.Title>
                {twist !== undefined
                  ? `${user.handle} suggests including the following twist:`
                  : "No twists exist for this recipe"}
              </Card.Title>
              <Card.Text>
                {twist !== undefined ? twist.content : null}
              </Card.Text>
              {/* Twist randomize and social options */}
              <Button className="twist-button-random" onClick={() => randomTwist()} variant="primary">
                Randomize
              </Button><br />
              <Button className="twist-buttons" variant="primary">Share</Button>
              <Button className="twist-buttons" variant="primary">Rate</Button>
              <Button className="twist-buttons" variant="primary" onClick={() => {
                handleFavorite();
              }} >Favorite</Button>
              <Button className="twist-buttons" onClick={toggleEditModal} variant="primary">Edit</Button>
              <Button className="twist-buttons" onClick={toggleCreateModal} variant="primary">Create</Button>
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
                <Form.Check onClick={() => setShowTwists(false)} type="checkbox" label="Disable Twists" />
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
