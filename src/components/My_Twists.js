import React, {useEffect, useState} from "react";
import {Container, Card, CardGroup} from 'react-bootstrap';
import '../styles/App.scss';
import axios from 'axios';

const My_Twists = () => {

  const [twists, setTwists] = useState([]);

  // Make a request for a recipe, random twist, and user given a recipe id
  useEffect(() => {
    axios
      .get(`/api/myTwists`)
      .then((response) => {
        console.log(response.data);
        // let parsedResponse = JSON.parse(response.data.message);
        // console.log(parsedResponse);
        setTwists(response.data);
      })
      .catch(function(error) {
        console.log(error);
      });
  }, []);

  return (
    <Container>
      <CardGroup className="mt-3">
        {twists.map(twist => (
          <Card>
            <Card.Img src={`${twist.meal_image}`} variant="top" alt="Card image" />
            <Card.Body>
              <Card.Title>{`${twist.name}`}</Card.Title>
              <Card.Text>
                {`${twist.content}`}
              </Card.Text>
              <Card.Link href={`/recipes/${twist.recipe_id}/twists/${twist.twist_id}`} variant="primary">View this recipe</Card.Link>
            </Card.Body>
          </Card>
        ))}
      </CardGroup>
    </Container>
  );
};

export default My_Twists;