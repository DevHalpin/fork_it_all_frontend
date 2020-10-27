import React, {useState, useEffect} from "react";
import {Container, Card, CardDeck, Row} from 'react-bootstrap';
import '../styles/App.scss';
import axios from 'axios';

const Fave_Users = (props) => {
  const id = props.match.params.user;
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

  const [user, setUser] = useState(fakeUser);
  // Make a request for a user with a given ID
  useEffect(() => {
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

  return (
    <Container>
      <Row style={{flex: 1}}>
        <CardDeck className="mt-3">
          <Card>
            <Card.Img variant="top" src={`${user.profile_picture}`} />
            <Card.Body>
              <Card.Title>{`${user.name}`}</Card.Title>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={`${user.profile_picture}`} />
            <Card.Body>
              <Card.Title>{`${user.name}`}</Card.Title>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={`${user.profile_picture}`} />
            <Card.Body>
              <Card.Title>{`${user.name}`}</Card.Title>
            </Card.Body>
          </Card>
        </CardDeck>
      </Row>
      <Row>
        <CardDeck className="mt-3">
          <Card>
            <Card.Img variant="top" src={`${user.profile_picture}`} />
            <Card.Body>
              <Card.Title>{`${user.name}`}</Card.Title>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={`${user.profile_picture}`} />
            <Card.Body>
              <Card.Title>{`${user.name}`}</Card.Title>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={`${user.profile_picture}`} />
            <Card.Body>
              <Card.Title>{`${user.name}`}</Card.Title>
            </Card.Body>
          </Card>
        </CardDeck>
      </Row>
    </Container>
  );
};

export default Fave_Users;