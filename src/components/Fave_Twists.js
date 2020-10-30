import React, {useEffect, useState} from "react";
import {Card, CardDeck} from 'react-bootstrap';
import '../styles/App.scss';
import axios from 'axios';

const Fave_Twists = () => {

  const [twists, setTwists] = useState([]);

  useEffect(() => {
    axios
      .get(`/api/faveTwists`)
      .then((response) => {
        setTwists(response.data);
      });
  }, []);
  console.log(twists);

  const twistsCard = twists.map(twist => (
    <Card key={twist.twist_id} style={{width: "30rem"}}>
      <Card.Img src={`${twist.meal_image}`} variant="top" alt="Card image" />
      <Card.Body>
        <Card.Title>{`${twist.name}`}</Card.Title>
        <Card.Text>
          {`${twist.content}`}
        </Card.Text>
        <Card.Link href={`/recipes/${twist.recipe_id}/twists/${twist.twist_id}`} variant="primary">View this recipe</Card.Link>
      </Card.Body>
    </Card>
  ));

  return (
    <>
      <CardDeck className="mt-3">
        {twistsCard}
      </CardDeck>
    </>
  );
};

export default Fave_Twists;