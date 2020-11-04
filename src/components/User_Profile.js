import React, {useState, useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/User_Profile.scss";
import axios from "axios";
import {Form, Button, Container, Row, Image, Col} from "react-bootstrap";

function User_Profile(props) {
  const id = parseInt(props.match.params.user);
  const [user, setUser] = useState(props.user);

  const [photo, setPhoto] = useState({
    preview: "",
    raw: "",
  });

  const handleProfileEditSubmit = (event) => {
    event.preventDefault();
    const patchObj = {
      user: {
        email: "charla@oconnell.com",
        profile_picture: "https://www.fillmurray.com/200/300",
        name: "Everett Predovic",
        handle: "Andaleeni",
        password: "1234",
        password_confirmation: "1234",
      },
    };
    axios.patch(`https://stark-shelf-20245.herokuapp.com/api/users/${props.user.id}`, patchObj, {
      headers: {
        authorization: `Token token=${localStorage.getItem('access_token')}`,
      },
    });
  };

  const handlePhotoUpload = (event) => {
    if (event.target.files.length) {
      setPhoto({
        preview: URL.createObjectURL(event.target.files[0]),
        raw: event.target.files[0],
      });
    }
  };

  useEffect(() => {
    axios.get(`https://stark-shelf-20245.herokuapp.com/api/users/${id}`, {
      headers: {
        authorization: `Token token=${localStorage.getItem('access_token')}`,
      },
    }).then((response) => {
      setUser(response.data);
    });
  }, [id]);

  let imageSource = user.profile_picture;
  user.profile_picture !== null || imageSource !== null
    ? (imageSource = user.profile_picture)
    : (imageSource =
      "https://www.flaticon.com/svg/static/icons/svg/817/817747.svg");

  return (
    <Container className="emp-profile">
      <Form onSubmit={handleProfileEditSubmit}>
        <Row>
          <Col className="md-4">
            <div className="profile-img">
              <Image
                src={photo.preview !== "" ? photo.preview : imageSource}
                alt="Profile picture"
              />
              <Row>
                <div id="change-photo">
                  {props.user !== undefined && props.user.id === id ? (
                    <Button
                      bsPrefix
                      className="gen-button file btn btn-lg btn-primary"
                    >
                      Change Photo
                      <input type="file" onChange={handlePhotoUpload} />
                    </Button>
                  ) : null}
                </div>
                <div id="edit-profile">
                  {props.user !== undefined && props.user.id === id ? (
                    <Button
                      bsPrefix
                      type="submit"
                      className="gen-button file btn btn-lg btn-primary"
                      name="btnAddMore"
                    >
                      Edit Profile
                    </Button>
                  ) : null }
                  {props.user !== undefined && props.user.id !== id ? (
                      <Button
                        bsPrefix
                        type="submit"
                        className="gen-button file btn btn-lg btn-primary"
                        name="btnAddMore"
                      >
                        Follow User
                      </Button>
                    ) : null}
                </div>
              </Row>
            </div>
            <div className="tab-content profile-tab" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <div className="row">
                  <div className="col-md-4 top-row">
                    <label className="info-labels">User Handle</label>
                  </div>
                  <div className="col-md-4 top-row">
                    <p>{user.handle}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <label className="info-labels">Name</label>
                  </div>
                  <div className="col-md-4">
                    <p>{user.name}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <label className="info-labels">Email</label>
                  </div>
                  <div className="col-md-4">
                    <p>{user.email}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <label className="info-labels">Phone</label>
                  </div>
                  <div className="col-md-4">
                    <p>123 456 7890</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <label className="info-labels">Profession</label>
                  </div>
                  <div className="col-md-5">
                    <p>Professional Dino Chef</p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col className="md-8">
            <div className="profile-head">
              <div>
                <h3 className="user-name">{user.name}</h3>
              </div>
              <div id="edit-profile">
              {props.user.id === id ? (
                <Button
                  bsPrefix
                  type="submit"
                  className="gen-button save-button"
                  name="btnAddMore"
                >
                  Save Profile
                </Button>
              ): null}
              </div>
            </div>
            <div>
              <h5>My Bio</h5>
              {user.bio !== null ? (
                <p>{user.bio}</p>
              ) :(
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu
                risus quis varius quam quisque id. Quis vel eros donec ac odio
                tempor orci. Nulla malesuada pellentesque elit eget gravida cum
                sociis. Mauris commodo quis imperdiet massa tincidunt. Id leo in
                vitae turpis massa sed. Et netus et malesuada fames ac turpis
                egestas. Fermentum iaculis eu non diam phasellus vestibulum.
                Odio tempor orci dapibus ultrices in iaculis nunc sed. Faucibus
                purus in massa tempor nec feugiat nisl pretium.
              </p>
              )}
            </div>
          </Col>
        </Row>
      </Form>
    </Container>
  )
}

export default User_Profile;
