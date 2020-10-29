import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Profile.scss";
import axios from "axios";
import {Nav, NavItem, NavLink, Form, FormControl, Button, Container, Row, Image, Col} from "react-bootstrap";

function User_Profile(props) {
  console.log(props)

  const editUser = (data) => {
    axios.put(`api/users/${props.user.id}`, data);
  };

  return (
    <Container className="emp-profile">
      <Row>
        <Col className="md-4">
          <div className="profile-img">
            <Image src={`${props.user.profile_picture}`} alt="" />
          </div>
          <div className="file btn btn-lg btn-primary">
            Change Photo
            <input type="file" name="file" />
          </div>
          <div></div>
        </Col>
        <Col className="md-6">
          <div className="profile-head">
            <h5>{props.user.name}</h5>
            <h6>{props.user.handle}</h6>
            <p className="proile-rating">
              Follows : <span>2471</span>
            </p>
            <Nav className="nav-tabs" id="myTab" role="tablist">
              <NavItem>
                <NavLink className="active"
                  id="home-tab"
                  data-toggle="tab"
                  href="#home"
                  role="tab"
                  aria-controls="home"
                  aria-selected="true"
                >
                  Bio
                </NavLink>
              </NavItem>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="profile-tab"
                  data-toggle="tab"
                  href="#profile"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                >
                  Twists
                </a>
              </li>
            </Nav>
            {props.user.bio}
          </div>
        </Col>
        <Col className="md-2">
          <input
            type="submit"
            className="profile-edit-btn"
            name="btnAddMore"
            value="Edit Profile"
            onClick={() => {
              // editUser(data);
            }}
          />
        </Col>
      </Row>
      <Row>
        <h1>Consider using this space for Twists?</h1>
      </Row>
    </Container>
  );
}

export default User_Profile;
