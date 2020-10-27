import React, {useEffect, useState} from "react";
import {Container, Card, CardGroup} from 'react-bootstrap';
import '../styles/App.scss';
import axios from 'axios';

const Fave_Twists = (props) => {
  const recipeId = props.match.params.recipe;
  const twistId = props.match.params.twist;
  const fakeTwist = {
    id: 101,
    recipe_id: 1,
    user_id: 1,
    tags: "Souvlaki",
    slug: "in_voluptatem",
    is_private: false,
    sort_order: 101,
    content:
      "Use the digital TCP feed, then you can back up the bluetooth alarm!",
    created_at: "2020-10-26 23:14:20.411925",
    updated_at: "2020-10-26 23:14:20.411925",
  };
  const fakeRecipe = {
    id: 2,
    name: "Mini burgers",
    region: "American",
    instructions:
      "1. Preheat the oven to 250 degrees F. Preheat a griddle to 350 degrees F. 2. Combine the onion powder, garlic powder, pepper, and salt in a small bowl.Set aside. 3. Line a jellyroll or sheet pan with parchment paper, and place the ground chuck in the middle of the pan.Cover the meat with a large sheet of plastic wrap.Roll meat with a rolling pin until it covers the surface of the pan; it should be very thin.Remove the plastic wrap, and sprinkle the meat with the seasoning mixture.Fold the meat in half, from side to side, using the parchment paper.Use a pizza wheel to cut the meat into 8 even squares. 4. Wrap the buns in foil and place in the oven for 5 to 10 minutes.Meanwhile, place the burgers on the griddle and cook for 2 to 3 minutes per side. 5. Remove the buns from the oven.Spread a small amount of mayonnaise on each bun and top with the burger and any other condiments, as desired.Serve immediately.",
    meal_image:
      "https://pizzazzerie.com/wp-content/uploads/2015/08/party-food-mini-cheeseburgers-pizzazzerie.jpg",
    meal_type: "Burgers",
    video_url: null,
    created_at: "2020-10-26 23:14:20.411925",
    updated_at: "2020-10-26 23:14:20.411925",
  };

  const [recipe, setRecipe] = useState(fakeRecipe);

  // Make a request for a user with a given ID
  useEffect(() => {
    axios
      .get(`/api/recipes/${recipeId}`)
      .then((response) => {
        console.log(response.data);
        // let parsedResponse = JSON.parse(response.data.message);
        // console.log(parsedResponse);
        setRecipe(response.data);
      })
      .catch(function(error) {
        console.log(error);
      });
  }, [recipeId]);

  const [twist, setTwist] = useState(fakeTwist);
  // Make a request for a user with a given ID
  useEffect(() => {
    axios
      .get(`/api/twists/${twistId}`)
      .then((response) => {
        console.log(response.data);
        // let parsedResponse = JSON.parse(response.data.message);
        // console.log(parsedResponse);
        setTwist(response.data);
      })
      .catch(function(error) {
        console.log(error);
      });
  }, [twistId]);

  return (
    <Container>
      <CardGroup className="mt-3">
        <Card>
          <Card.Img src={`${recipe.meal_image}`} variant="top" alt="Card image" />
          <Card.Body>
            <Card.Title>{`${recipe.name}`}</Card.Title>
            <Card.Text>
              {`${twist.content}`}
            </Card.Text>
            <Card.Link href={`/recipes/${recipeId}/twists/${twistId}`} variant="primary">View this recipe</Card.Link>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img src={`${recipe.meal_image}`} variant="top" alt="Card image" />
          <Card.Body>
            <Card.Title>{`${recipe.name}`}</Card.Title>
            <Card.Text>
              {`${twist.content}`}
            </Card.Text>
            <Card.Link href={`/recipes/${recipeId}/twists/${twistId}`} variant="primary">View this recipe</Card.Link>
          </Card.Body>
        </Card>
      </CardGroup>
      <CardGroup className="mt-3">
        <Card>
          <Card.Img src={`${recipe.meal_image}`} variant="top" alt="Card image" />
          <Card.Body>
            <Card.Title>{`${recipe.name}`}</Card.Title>
            <Card.Text>
              {`${twist.content}`}
            </Card.Text>
            <Card.Link href={`/recipes/${recipeId}/twists/${twistId}`} variant="primary">View this recipe</Card.Link>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img src={`${recipe.meal_image}`} variant="top" alt="Card image" />
          <Card.Body>
            <Card.Title>{`${recipe.name}`}</Card.Title>
            <Card.Text>
              {`${twist.content}`}
            </Card.Text>
            <Card.Link href={`/recipes/${recipeId}/twists/${twistId}`} variant="primary">View this recipe</Card.Link>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img src={`${recipe.meal_image}`} variant="top" alt="Card image" />
          <Card.Body>
            <Card.Title>{`${recipe.name}`}</Card.Title>
            <Card.Text>
              {`${twist.content}`}
            </Card.Text>
            <Card.Link href={`/recipes/${recipeId}/twists/${twistId}`} variant="primary">View this recipe</Card.Link>
          </Card.Body>
        </Card>
      </CardGroup>
    </Container>
  );
};

export default Fave_Twists;