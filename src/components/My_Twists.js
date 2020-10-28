import React, {useEffect, useState} from "react";
import {Container, Card, CardGroup} from 'react-bootstrap';
import '../styles/App.scss';
import axios from 'axios';

const My_Twists = (props) => {
  const id = props.match.params.user;
  console.log(id);

  const [user, setUser] = useState("");

  // Make a request for a recipe, random twist, and user given a recipe id
  useEffect(() => {
    console.log('Triggered!');
    axios
      .get(`/api/users/${id}`)
      .then((response) => {
        console.log(response.data);
        // let parsedResponse = JSON.parse(response.data.message);
        // console.log(parsedResponse);
        setUser(response.data);
      })
      .catch(function(error) {
        console.log(error);
      });
  }, [id]);

  if (user) {
    return (
      <Container>
        <CardGroup className="mt-3">
          <Card>
            <Card.Img src={`${user[0].meal_image}`} variant="top" alt="Card image" />
            <Card.Body>
              <Card.Title>{`${user[0].tags}`}</Card.Title>
              <Card.Text>
                {`${user[0].content}`}
              </Card.Text>
              <Card.Link href={`/recipes/${user[0].recipe_id}`} variant="primary">View this recipe</Card.Link>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img src={`${user[1].meal_image}`} variant="top" alt="Card image" />
            <Card.Body>
              <Card.Title>{`${user[1].tags}`}</Card.Title>
              <Card.Text>
                {`${user[1].content}`}
              </Card.Text>
              <Card.Link href={`/recipes/${user[1].recipe_id}`} variant="primary">View this recipe</Card.Link>
            </Card.Body>
          </Card>
        </CardGroup>
        <CardGroup className="mt-3">
          <Card>
            <Card.Img src={`${user[2].meal_image}`} variant="top" alt="Card image" />
            <Card.Body>
              <Card.Title>{`${user[2].tags}`}</Card.Title>
              <Card.Text>
                {`${user[2].content}`}
              </Card.Text>
              <Card.Link href={`/recipes/${user[2].recipe_id}`} variant="primary">View this recipe</Card.Link>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img src={`${user[0].meal_image}`} variant="top" alt="Card image" />
            <Card.Body>
              <Card.Title>{`${user[0].tags}`}</Card.Title>
              <Card.Text>
                {`${user[0].content}`}
              </Card.Text>
              <Card.Link href={`/recipes/${user[0].recipe_id}`} variant="primary">View this recipe</Card.Link>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img src={`${user[1].meal_image}`} variant="top" alt="Card image" />
            <Card.Body>
              <Card.Title>{`${user[1].tags}`}</Card.Title>
              <Card.Text>
                {`${user[1].content}`}
              </Card.Text>
              <Card.Link href={`/recipes/${user[1].recipe_id}`} variant="primary">View this recipe</Card.Link>
            </Card.Body>
          </Card>
        </CardGroup>

      </Container>
    );
  }
  return (
    <div>Loading</div>
  );
};

export default My_Twists;