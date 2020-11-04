import React, {useEffect, useState} from "react";
import {Container, Card, Row} from "react-bootstrap";
import "../styles/App.scss";
import axios from "axios";

const MyTwists = (props) => {
  const [twists, setTwists] = useState([]);
  const user = props.user;
  // Make a request for a recipe, random twist, and user given a recipe id
  useEffect(() => {
    axios
      .get(`/api/myTwists`, {
        headers: {
          authorization: `Token token=${user.access_token}`,
        },
      })
      .then((response) => {
        setTwists(response.data);
      })
      .catch(function(error) {
        console.log(error);
      });
  }, [user.access_token]);

  const twistsCard = twists.map((twist) => (
    <Card key={twist.twist_id} className="user-saved">
      <Card.Img src={`${twist.meal_image}`} variant="top" alt="Card image" />
      <Card.Body>
        <Card.Title>{`${twist.name}`}</Card.Title>
        <Card.Text>{`${twist.content}`}</Card.Text>
        <Card.Link
          href={`/recipes/${twist.recipe_id}/twists/${twist.twist_id}`}
          className="card-link"
        >
          View this recipe
        </Card.Link>
      </Card.Body>
    </Card>
  ));

  return (
    <Container className="d-flex">
      <Row className="justify-content-center">{twistsCard}</Row>
    </Container>
  );
};

export default MyTwists;
