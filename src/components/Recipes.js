import React, {useState, useEffect} from "react";
import {Dropdown, DropdownButton, Card, CardDeck, Container, Col, Button, Form} from 'react-bootstrap';
import axios from 'axios';

const Recipes = () => {
  const fakeRecipe = {
    id: 2,
    name: "Mini burgers",
    region: "American",
    instructions: "1. Preheat the oven to 250 degrees F. Preheat a griddle to 350 degrees F. 2. Combine the onion powder, garlic powder, pepper, and salt in a small bowl.Set aside. 3. Line a jellyroll or sheet pan with parchment paper, and place the ground chuck in the middle of the pan.Cover the meat with a large sheet of plastic wrap.Roll meat with a rolling pin until it covers the surface of the pan; it should be very thin.Remove the plastic wrap, and sprinkle the meat with the seasoning mixture.Fold the meat in half, from side to side, using the parchment paper.Use a pizza wheel to cut the meat into 8 even squares. 4. Wrap the buns in foil and place in the oven for 5 to 10 minutes.Meanwhile, place the burgers on the griddle and cook for 2 to 3 minutes per side. 5. Remove the buns from the oven.Spread a small amount of mayonnaise on each bun and top with the burger and any other condiments, as desired.Serve immediately.",
    meal_image: "https://pizzazzerie.com/wp-content/uploads/2015/08/party-food-mini-cheeseburgers-pizzazzerie.jpg",
    meal_type: "Burgers",
    video_url: null,
    created_at: "2020-10-26 23:14:20.411925",
    updated_at: "2020-10-26 23:14:20.411925"
  };
  const fakeTwist = {
    id: 101,
    recipe_id: 1,
    user_id: 1,
    tags: "Souvlaki",
    slug: "in_voluptatem",
    is_private: false,
    sort_order: 101,
    content: "Use the digital TCP feed, then you can back up the bluetooth alarm!",
    created_at: "2020-10-26 23:14:20.411925",
    updated_at: "2020-10-26 23:14:20.411925"
  };
  const fakeUser = {
    id: 101,
    email: "charla@oconnell.com",
    profile_picture: "https://www.fillmurray.com/200/300",
    handle: "evia.pouros",
    created_at: "2020-10-26T23:07:26.000Z",
    updated_at: "2020-10-26T23:07:26.000Z",
    name: "Everett Predovic",
    bio:
      "Labore et excepturi vero expedita aut reiciendis laboriosam inventore fugiat voluptatum a ipsum itaque sapiente accusamus amet doloribus aliquid necessitatibus laborum quasi ea illo numquam temporibus aperiam voluptatem aut aut odit repellat ut occaecati quo id vero est asperiores natus fuga et architecto consequuntur atque est nobis eum sed officia nemo voluptatem ullam quas ut veniam vitae iusto et sequi quis ut sint nulla asperiores cumque similique veritatis in quia a velit sunt nihil suscipit sit voluptate iure placeat natus doloribus tempora voluptate et eum suscipit saepe error deserunt velit ipsa consequatur in accusantium laudantium non consequatur eveniet et provident delectus esse qui aspernatur nam tempore eligendi exercitationem iste eius ea nisi qui consequatur quis excepturi sapiente corporis reprehenderit voluptatum omnis eos hic voluptatem quia blanditiis recusandae quidem ut quo dicta doloremque sit dolor qui quia est repellat nostrum tenetur cupiditate aspernatur et impedit assumenda necessitatibus cupiditate id assumenda quos magnam et sed dolores et reprehenderit tempore dolores impedit dolorum illum omnis ea iste libero cum hic perferendis rem veniam voluptatem culpa deleniti placeat quos ea minus facilis enim labore est deserunt itaque maiores quas consequatur et non adipisci nesciunt aut quaerat voluptatem qui rem ipsam esse numquam magni ab ipsum et nesciunt quae sed exercitationem dignissimos est minus debitis dolor fugiat dolores ut culpa id voluptates libero vel aut maxime aperiam error molestiae voluptas soluta perspiciatis quibusdam eum perspiciatis quaerat qui praesentium magnam atque autem est eius est dolorem laudantium odio nihil tenetur distinctio neque recusandae molestias amet earum porro quisquam beatae sunt alias dicta expedita non unde perferendis rerum saepe facilis dolorem maiores sit et elorem consequatur ut repudiandae qui cum provident fugit minima totam optio occaecati ab omnis sit consectetur quis aliquid vel vel quia modi rerum ut sed laborum aut eaque tempora et cumque ad qui iure doloremque distinctio voluptatem incidunt animi rerum illum molestiae non eos et ut est quo earum voluptatem eligendi velit dolor non facere ratione enim quae consequuntur nobis rerum dignissimos sit molestiae ducimus iusto harum molestias nihil debitis corrupti quia sed nulla?",
  };

  const [recipe, setRecipe] = useState(fakeRecipe);
  // Make a request for a user with a given ID
  useEffect(() => {
    axios
      .get("/api/recipes/1")
      .then((response) => {
        console.log(response.data);
        // let parsedResponse = JSON.parse(response.data.message);
        // console.log(parsedResponse);
        setRecipe(response.data);
      })
      .catch(function(error) {
        console.log(error);
      });
  }, []);

  const [twist, setTwist] = useState(fakeTwist);
  // Make a request for a user with a given ID
  useEffect(() => {
    axios
      .get("/api/twists/10")
      .then((response) => {
        console.log(response.data);
        // let parsedResponse = JSON.parse(response.data.message);
        // console.log(parsedResponse);
        setTwist(response.data);
      })
      .catch(function(error) {
        console.log(error);
      });
  }, []);

  const [user, setUser] = useState(fakeUser);
  // Make a request for a user with a given ID
  useEffect(() => {
    axios
      .get("/api/users/100")
      .then((response) => {
        console.log(response.data);
        // let parsedResponse = JSON.parse(response.data.message);
        // console.log(parsedResponse);
        setUser(response.data);
      })
      .catch(function(error) {
        console.log(error);
      });
  }, []);

  return (
    // Recipe options menu
    <>
      <Container>
        <Col>
          < DropdownButton title="Recipe Options" align="right" className="recipe-dropdown">
            <Dropdown.Item href="#/action-1">Share</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Rate</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Create Twist</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Add to Favorites</Dropdown.Item>
          </DropdownButton>
        </Col>

        {/* // Recipe display */}
        <CardDeck className="recipe-columns">
          <Card className="recipe-card" >
            <Card.Img src={`${recipe.meal_image}`} />
            <Card.Body className="recipe-body">
              <Card.Header as="h5" className="text-center">{`${recipe.name}`} </Card.Header>
              <Card.Text className="recipe-text">
                {`${recipe.instructions}`}
              </Card.Text>
            </Card.Body>
          </Card>
          {/* Twist display */}
          <Card className="text-center twist-card">
            <Card.Header as="h5">User Twists!</Card.Header>
            <Card.Body>
              <Card.Title>{user.handle} suggests including the following twist:</Card.Title>
              <Card.Text>
                {twist.content}
              </Card.Text>
              <Button variant="primary">Find a random Twist</Button>
            </Card.Body>
            <Form>
              <Form.Group as={Col}>
                <Form.Label>Find Twists by User</Form.Label>
                <Form.Control size="md" type="text" placeholder="Enter a user handle" />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>Search by Twist Type</Form.Label>
                <Form.Control as="select" id="inlineFormCustomSelect"
                  custom>
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