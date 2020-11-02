import React, {useState, useEffect} from "react";
import ReactPlayer from "react-player"
import {
  Card,
  CardDeck,
  Container,
  Col,
  Button,
  Form,
  Alert,
  NavDropdown
} from "react-bootstrap";
import {
  TwistCreateModal,
  TwistEditModal,
  TwistDeleteModal,
  TwistShareModal,
} from "./Modal";
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
    } else if (!favorites.includes(twist.id) && favorited === true) {
      setFavorited(false);
    }
  };

  // Make a request for a recipe, random twist, and user given a recipe id
  useEffect(() => {
    if (twistId !== undefined) {
      axios.get(`/api/recipes/${id}?twist=${twistId}`).then((response) => {
        setTwist(response.data);
      });
    } else {
      axios.get(`/api/recipes/${id}?random=1`).then((response) => {
        setTwist(response.data);
      });
    }
    axios.get(`/api/recipes/${id}`).then((response) => {
      console.log(response);
      setRecipe(response.data);
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
      setTwist(response.data);
    });
  };
  //used for updating the edit twist content
  const specificTwist = (id, twist) => {
    axios.get(`/api/recipes/${id}?twist=${twist}`).then((response) => {
      setTwist(response.data);
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

  function matchKey(objectToSearch, keyToFind) {
    const result = []
    for (var k in objectToSearch) {
      console.log(objectToSearch[k])
      if (objectToSearch[k] !== null && objectToSearch[k] !== ""){
        if ( k.toLowerCase().indexOf(keyToFind.toLowerCase()) !== -1) 
          result.push(objectToSearch[k]);
      }
    }
    return result;
  }

  
  const buildIngredients = () => {
    let ingredients = []
    const ingredientArr = (matchKey(recipe, "ingredient"))
    const measureArr = (matchKey(recipe, "measure"))

    for (let i = 0; i < ingredientArr.length; i++){
      ingredients.push({ingredient:ingredientArr[i],
                        measure: measureArr[i]})
    }
    return ingredients
  }

  const ingredientList = buildIngredients().map((item) => {
    return (
      <Card.Text>
        {`${item.ingredient} : ${item.measure}`}
      </Card.Text>
    )
  })

  // if (recipe) {
  return (
    <>
      <Container fluid>
        {showFaveAlert && (
          <Alert
            onClose={() => setShowFaveAlert(false)}
            dismissible
            bsPrefix
            className="alert"
          >
            Added to favorites!
          </Alert>
        )}
        {showCreateAlert && (
          <Alert
            onClose={() => setShowCreateAlert(false)}
            dismissible
            bsPrefix
            className="alert"
          >
            Twist has been created!
          </Alert>
        )}
        {showEditAlert && (
          <Alert
            onClose={() => setShowEditAlert(false)}
            dismissible
            bsPrefix
            className="alert"
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
          random={() => {
            randomTwist();
          }}
        />
        <TwistEditModal
          show={isEditModalOpen}
          onHide={handleEditAlert}
          twist={twist ? twist : "no twist"}
          getSpecifcTwist={() => {
            specificTwist(id, twist.id);
          }}
        />
        <TwistDeleteModal
          show={isDeleteModalOpen}
          onHide={toggleDeleteModal}
          twist={twist ? twist : undefined}
          random={() => {
            randomTwist();
          }}
        />
        {twist !== null ? (
          <TwistShareModal
            show={isShareModalOpen}
            onHide={toggleShareModal}
            url={`/twists/${twist.slug}`}
          />
        ) : null}

        {/* Show twists when disabled */}
        {showTwists === false ? (
          <Button
            onClick={setShowTwists}
            className="gen-button login-buttons enable-button"
          >
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
                Region:<br />{`${recipe.region}`}
              </Card.Text>
                <NavDropdown.Divider />
              <Card.Text className="recipe-text">
                Type:<br />{`${recipe.meal_type}`}
              </Card.Text>
                <NavDropdown.Divider />
              <Card.Text className="recipe-text">
                Recipe Video:<br />
              </Card.Text>
                <ReactPlayer url={`${recipe.video_url}`} />
                <NavDropdown.Divider />
                <Card.Text className="recipe-text">
                Instructions:<br />{`${recipe.instructions}`}
                </Card.Text>
            </Card.Body>
          </Card>

          {/* Twist display */}
          <Col>
            <Card
              className={
                showTwists ? "text-center twist-card" : "twist-card-hide"
              }
            >
              <Card.Header as="h5">User Twists</Card.Header>
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
                    className="twist-button-random gen-button login-buttons"
                    onClick={() => buildIngredients()}
                    bsPrefix
                  >
                    Randomize
                  </Button>
                ) : null}
                <br />
                {twist !== null ? (
                  <Button
                    className="login-buttons gen-button"
                    bsPrefix
                    onClick={toggleShareModal}
                  >
                    Share
                  </Button>
                ) : null}
                {userHandle && twist !== null && userHandle !== twist.handle ? (
                  <Button className="login-buttons gen-button" bsPrefix>
                    Rate
                  </Button>
                ) : null}
                {userHandle && twist !== null && userHandle !== twist.handle && favorited === false ? (
                  <Button
                    className="login-buttons gen-button"
                    bsPrefix
                    onClick={() => {
                      handleFavorite();
                    }}
                  >
                    Favorite
                  </Button>
                ) : null}
                {twist !== null && userHandle === twist.handle ? (
                  <Button
                    className="login-buttons gen-button"
                    onClick={toggleEditModal}
                    bsPrefix
                  >
                    Edit
                  </Button>
                ) : null}
                {userHandle ? (
                  <Button
                    className="login-buttons gen-button"
                    onClick={toggleCreateModal}
                    bsPrefix
                  >
                    Create
                  </Button>
                ) : null}
                {twist && userHandle && userHandle === twist.handle ? (
                  <Button
                    className="logout-button gen-button"
                    onClick={toggleDeleteModal}
                    bsPrefix
                  >
                    Delete
                  </Button>
                ) : null}
              </Card.Body>
              <Form className="twist-form">
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

            {/* Ingredient display */}
            <Card className="twist-card">
              <Card.Body className="ingredient-body">
                <Card.Header as="h5" className="text-center ingredient-header">
                  Ingredients
              </Card.Header>
                <Card.Text>
                  {ingredientList}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </CardDeck>
      </Container>
    </>
  );
  // }
  // return <h3>Loading</h3>;
};

export default Recipes;
