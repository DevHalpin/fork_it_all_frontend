import React, {useEffect, useState} from "react";
import {Container, Card, CardGroup} from 'react-bootstrap';
import '../styles/App.scss';
import axios from 'axios';

const My_Twists = (props) => {
  const id = props.match.params.user;
  console.log(props.match.params.user);

  const [user, setUser] = useState("");
  const [otherUser, setOtherUser] = useState("");
  const [thirdUser, setThirdUser] = useState("");

  // Make a request for a recipe, random twist, and user given a recipe id
  useEffect(() => {
    axios
      .get(`/api/users/${id}`)
      .then((response) => {
        console.log(response.data);
        // let parsedResponse = JSON.parse(response.data.message);
        // console.log(parsedResponse);
        setUser(response.data[0]);
        setOtherUser(response.data[1]);
        setThirdUser(response.data[2]);
      })
      .catch(function(error) {
        console.log(error);
      });
  }, [id]);

  return (
    <Container>
      <CardGroup className="mt-3">
        <Card>
          <Card.Img src={`${user.meal_image}`} variant="top" alt="Card image" />
          <Card.Body>
            <Card.Title>{`${user.tags}`}</Card.Title>
            <Card.Text>
              {`${user.content}`}
            </Card.Text>
            <Card.Link href={`/recipes/${user.recipe_id}`} variant="primary">View this recipe</Card.Link>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img src={`${otherUser.meal_image}`} variant="top" alt="Card image" />
          <Card.Body>
            <Card.Title>{`${otherUser.tags}`}</Card.Title>
            <Card.Text>
              {`${otherUser.content}`}
            </Card.Text>
            <Card.Link href={`/recipes/${otherUser.recipe_id}`} variant="primary">View this recipe</Card.Link>
          </Card.Body>
        </Card>
      </CardGroup>
      <CardGroup className="mt-3">
        <Card>
          <Card.Img src={`${thirdUser.meal_image}`} variant="top" alt="Card image" />
          <Card.Body>
            <Card.Title>{`${thirdUser.tags}`}</Card.Title>
            <Card.Text>
              {`${thirdUser.content}`}
            </Card.Text>
            <Card.Link href={`/recipes/${thirdUser.recipe_id}`} variant="primary">View this recipe</Card.Link>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img src={`${user.meal_image}`} variant="top" alt="Card image" />
          <Card.Body>
            <Card.Title>{`${user.tags}`}</Card.Title>
            <Card.Text>
              {`${user.content}`}
            </Card.Text>
            <Card.Link href={`/recipes/${user.recipe_id}`} variant="primary">View this recipe</Card.Link>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img src={`${otherUser.meal_image}`} variant="top" alt="Card image" />
          <Card.Body>
            <Card.Title>{`${otherUser.tags}`}</Card.Title>
            <Card.Text>
              {`${otherUser.content}`}
            </Card.Text>
            <Card.Link href={`/recipes/${otherUser.recipe_id}`} variant="primary">View this recipe</Card.Link>
          </Card.Body>
        </Card>
      </CardGroup>
    </Container>
  );
};

export default My_Twists;