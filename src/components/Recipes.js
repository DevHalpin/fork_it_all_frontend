import React, {useState, useEffect} from "react";
import {
  Card,
  CardDeck,
  Container,
  Col,
  Button,
  Form,
  Alert,
} from "react-bootstrap";
import {TwistCreateModal, TwistEditModal, TwistDeleteModal, TwistShareModal} from "./Modal";
import axios from "axios";
import "../styles/Recipes.scss";
import "../styles/App.scss";

const Recipes = (props) => {
  let id = props.match.params.recipe;
  let twistId = props.match.params.twist;
  const userHandle = props.user.handle;
  const [recipe, setRecipe] = useState({});
  const [twist, setTwist] = useState({});
  const [favorites, setFavorites] = useState([]);
  const [favorited, setFavorited] = useState(false);

  // Alert state
  const [showFaveAlert, setShowFaveAlert] = useState(false);
  const [showCreateAlert, setShowCreateAlert] = useState(false);
  const [showEditAlert, setShowEditAlert] = useState(false);

  // Modal state
  const [isCreateModalOpen, setCreateModalOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [isShareModalOpen, setShareModalOpen] = useState(false);

  // Twist display state
  const [showTwists, setShowTwists] = useState(true);

  const checkFavorited = () => {
    if (favorites.includes(twist.id) && favorited === false) {
      setFavorited(true);
    }
    else if (!favorites.includes(twist.id) && favorited === true) {
      setFavorited(false);
    }
  };

  // Make a request for a recipe, random twist, and user given a recipe id
  useEffect(() => {
    if (twistId !== undefined) {
      axios.get(`/api/recipes/${id}?twist=${twistId}`)
        .then((response) => {
          setTwist(response.data.recipe);
        });
    }
    else {
      axios.get(`/api/recipes/${id}?random=1`).then((response) => {
        setTwist(response.data.recipe);
      });
    }
    axios.get(`/api/recipes/${id}`).then((response) => {
      setRecipe(response.data.recipe);
    });
    axios.get('/api/faveTwists').then((response) => {
      const favoriteArr = [];
      response.data.forEach(favorite => {
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

  // Toggle for modals
  const toggleCreateModal = () => {
    setCreateModalOpen(!isCreateModalOpen);
  };
  const toggleEditModal = () => {
    setEditModalOpen(!isEditModalOpen);
  };
  const toggleDeleteModal = () => {
    setDeleteModalOpen(!isDeleteModalOpen);
  };

  const toggleShareModal = () => {
    setShareModalOpen(!isShareModalOpen);
  };

  const handleFavoriteAlert = () => {
    setShowFaveAlert(true);
  };

  const handleFavorite = () => {
    axios
      .put(`/api/twists/${twist.id}/favorite?type=favorite`, {
        twist_id: `${twist.id}`,
      })
      .then(() => handleFavoriteAlert());
  };

  const handleCreateAlert = () => {
    setShowCreateAlert(true);
    toggleCreateModal();
  };

  const handleEditAlert = () => {
    setShowEditAlert(true);
    toggleEditModal();
  };

  // if (recipe) {
  return (
    <>
      <Container fluid>
        {showFaveAlert && (
          <Alert
            onClose={() => setShowFaveAlert(false)}
            dismissible
            variant="primary"
          >
            Added to favorites!
          </Alert>
        )}
        {showCreateAlert && (
          <Alert
            onClose={() => setShowCreateAlert(false)}
            dismissible
            variant="primary"
          >
            Twist has been created!
          </Alert>
        )}
        {showEditAlert && (
          <Alert
            onClose={() => setShowEditAlert(false)}
            dismissible
            variant="primary"
          >
            Updated twist has been saved!
          </Alert>
        )}

        {/* Twist modals */}
        <TwistCreateModal
          show={isCreateModalOpen}
          onHide={handleCreateAlert}
          user={props.user}
          recipe={props.match.params.recipe}
        />
        <TwistEditModal
          show={isEditModalOpen}
          onHide={handleEditAlert}
          twist={twist ? twist : "no twist"}
        />
        <TwistDeleteModal
          show={isDeleteModalOpen}
          onHide={toggleDeleteModal}
          twist={twist ? twist : undefined}
        />
        {twist !== null ?
          <TwistShareModal
            show={isShareModalOpen}
            onHide={toggleShareModal}
            url={`http://localhost:3000/twists/${twist.slug}`}
          />
          : null}

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
                {twist !== null
                  ? `${twist.handle} suggests including the following twist:`
                  : "No twists exist for this recipe"}
              </Card.Title>
              <Card.Text>{twist !== null ? twist.content : null}</Card.Text>
              {/* Twist randomize and social options */}
              {twist !== null ? (
                <Button
                  className="twist-button-random"
                  onClick={() => randomTwist()}
                  variant="primary"
                >
                  Randomize
                </Button>
              ) : null}
              <br />
              {twist !== null ? (
                <Button
                  className="twist-buttons"
                  variant="primary"
                  onClick={toggleShareModal}
                >
                  Share
                </Button>
              ) : null}
              {userHandle && twist !== null && userHandle !== twist.handle ? (
                <Button className="twist-buttons" variant="primary">
                  Rate
                </Button>
              ) : null}
              {userHandle && twist !== null && userHandle !== twist.handle && favorited === false ? (
                <Button
                  className="twist-buttons"
                  variant="primary"
                  onClick={() => {
                    handleFavorite();
                  }}
                >
                  Favorite
                </Button>
              ) : null}
              {twist !== null && userHandle === twist.handle ? (
                <Button
                  className="twist-buttons"
                  onClick={toggleEditModal}
                  variant="primary"
                >
                  Edit
                </Button>
              ) : null}
              {userHandle ? (
                <Button
                  className="twist-buttons"
                  onClick={toggleCreateModal}
                  variant="primary"
                >
                  Create
                </Button>
              ) : null}
              {twist && userHandle && userHandle === twist.handle ? (
                <Button
                  className="twist-buttons"
                  onClick={toggleDeleteModal}
                  variant="danger"
                >
                  Delete this twist
                </Button>
              ) : null}
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
