import React, {useEffect, useState} from "react";
import {Card, Row, Container} from "react-bootstrap";
import "../styles/App.scss";
import axios from "axios";

const FaveTwists = (props) => {
  const [twists, setTwists] = useState([]);
  const user = props.user;
  useEffect(() => {
    axios
      .get(`/api/faveTwists`, {
        headers: {
          authorization: `Token token=${user.access_token}`,
        },
      })
      .then((response) => {
        setTwists(response.data);
      });
  }, [user.access_token]);

  const twistsCard = twists.map((twist) => {
    return (
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
    );
  });

  return (
    <Container className="d-flex">
      <Row className="justify-content-center">{twistsCard}</Row>
    </Container>
  );
};
export default FaveTwists;
