import React from "react";
import {Container, Card, CardGroup} from 'react-bootstrap';
import '../App.scss';

const Fave_Twists = () => {
  return (
    <Container>
      <CardGroup className="mt-3">
        <Card>
          <Card.Body>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk
              of the card's content.
              </Card.Text>
          </Card.Body>
          <Card.Img variant="bottom" src="holder.js/100px180" />
        </Card>
        <Card>
          <Card.Body>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk
              of the card's content.
              </Card.Text>
          </Card.Body>
          <Card.Img variant="bottom" src="holder.js/100px180" />
        </Card>
      </CardGroup>
      <CardGroup className="mt-3">
        <Card>
          <Card.Body>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk
              of the card's content.
              </Card.Text>
          </Card.Body>
          <Card.Img variant="bottom" src="holder.js/100px180" />
        </Card>
        <Card>
          <Card.Body>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk
              of the card's content.
              </Card.Text>
          </Card.Body>
          <Card.Img variant="bottom" src="holder.js/100px180" />
        </Card>
        <Card>
          <Card.Body>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk
              of the card's content.
              </Card.Text>
          </Card.Body>
          <Card.Img variant="bottom" src="holder.js/100px180" />
        </Card>
      </CardGroup>
    </Container>
  );
};

export default Fave_Twists;