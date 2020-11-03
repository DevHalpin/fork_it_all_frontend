import React, { useState, useEffect } from "react";
import { Container, Card, CardDeck, Row } from "react-bootstrap";
import "../styles/App.scss";
import axios from "axios";

const Fave_Users = (props) => {
  const id = props.match.params.user;
  const fakeUser1 = {
    id: 101,
    email: "charla@oconnell.com",
    profile_picture:
      "https://www.lighthouselabs.ca/uploads/team_member/avatar/212/medium_IMG-20180109-WA0021.jpg",
    handle: "evia.pouros",
    created_at: "2020-10-26T23:07:26.000Z",
    updated_at: "2020-10-26T23:07:26.000Z",
    name: "Hafiz Suara",
  };

  const fakeUser2 = {
    email: "charla@oconnell.com",
    profile_picture:
      "https://www.lighthouselabs.ca/uploads/team_member/avatar/371/medium_Headshot.png",
    handle: "evia.pouros",
    created_at: "2020-10-26T23:07:26.000Z",
    updated_at: "2020-10-26T23:07:26.000Z",
    name: "Travis Borsa",
  };

  const fakeUser3 = {
    email: "charla@oconnell.com",
    profile_picture:
      "https://www.lighthouselabs.ca/uploads/team_member/avatar/330/medium_Andy_Lindsay_profile.jpeg",
    handle: "evia.pouros",
    created_at: "2020-10-26T23:07:26.000Z",
    updated_at: "2020-10-26T23:07:26.000Z",
    name: "Andy Lindsay",
  };

  const fakeUser4 = {
    email: "charla@oconnell.com",
    profile_picture:
      "https://www.lighthouselabs.ca/uploads/team_member/avatar/219/medium_Screen_Shot_2018-02-01_at_6.08.30_PM.png",
    handle: "evia.pouros",
    created_at: "2020-10-26T23:07:26.000Z",
    updated_at: "2020-10-26T23:07:26.000Z",
    name: "Caroline Lauder",
  };

  const fakeUser5 = {
    email: "charla@oconnell.com",
    profile_picture:
      "https://s3.amazonaws.com/lighthouse-compass2/uploads/avatar/custom_avatar/4215/thumb_70672238_10215144203261500_2965875784918499328_o.jpg",
    handle: "evia.pouros",
    created_at: "2020-10-26T23:07:26.000Z",
    updated_at: "2020-10-26T23:07:26.000Z",
    name: "Bradley Fung",
  };

  const fakeUser6 = {
    email: "charla@oconnell.com",
    profile_picture:
      "https://pbs.twimg.com/profile_images/588361371563102210/LrmTN4Io.jpg",
    handle: "evia.pouros",
    created_at: "2020-10-26T23:07:26.000Z",
    updated_at: "2020-10-26T23:07:26.000Z",
    name: "Khurram Virani",
  };

  const fakeUser7 = {
    email: "charla@oconnell.com",
    profile_picture:
      "https://www.lighthouselabs.ca/uploads/team_member/avatar/378/medium_20190819_091501.jpg",
    handle: "evia.pouros",
    created_at: "2020-10-26T23:07:26.000Z",
    updated_at: "2020-10-26T23:07:26.000Z",
    name: "Kelly Gordon",
  };

  const fakeUser8 = {
    email: "charla@oconnell.com",
    profile_picture:
      "https://www.lighthouselabs.ca/uploads/team_member/avatar/396/medium_120-0-4.jpg",
    handle: "evia.pouros",
    created_at: "2020-10-26T23:07:26.000Z",
    updated_at: "2020-10-26T23:07:26.000Z",
    name: "Meri Ghazaryan",
  };

  // const [user, setUser] = useState(fakeUser);
  // Make a request for a user with a given ID
  // useEffect(() => {
  //   axios
  //     .get(`/api/users/${id}`)
  //     .then((response) => {
  //       setUser(response.data);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // }, [id]);

  return (
    <Container>
      <Row style={{ flex: 1 }}>
        <CardDeck className="mt-3">
          <Card>
            <Card.Img variant="top" src={`${fakeUser1.profile_picture}`} />
            <Card.Body>
              <Card.Title>{`${fakeUser1.name}`}</Card.Title>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={`${fakeUser2.profile_picture}`} />
            <Card.Body>
              <Card.Title>{`${fakeUser2.name}`}</Card.Title>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={`${fakeUser3.profile_picture}`} />
            <Card.Body>
              <Card.Title>{`${fakeUser3.name}`}</Card.Title>
            </Card.Body>
          </Card>
        </CardDeck>
      </Row>
      <Row>
        <CardDeck className="mt-3">
          <Card>
            <Card.Img variant="top" src={`${fakeUser4.profile_picture}`} />
            <Card.Body>
              <Card.Title>{`${fakeUser4.name}`}</Card.Title>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={`${fakeUser5.profile_picture}`} />
            <Card.Body>
              <Card.Title>{`${fakeUser5.name}`}</Card.Title>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={`${fakeUser6.profile_picture}`} />
            <Card.Body>
              <Card.Title>{`${fakeUser6.name}`}</Card.Title>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={`${fakeUser7.profile_picture}`} />
            <Card.Body>
              <Card.Title>{`${fakeUser7.name}`}</Card.Title>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={`${fakeUser8.profile_picture}`} />
            <Card.Body>
              <Card.Title>{`${fakeUser8.name}`}</Card.Title>
            </Card.Body>
          </Card>
        </CardDeck>
      </Row>
    </Container>
  );
};

export default Fave_Users;
