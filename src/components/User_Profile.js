import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Profile.scss";
import axios from "axios";

function User_Profile() {
  const fakeUser = {
    id: 100,
    email: "long.collier@russel-hyatt.com",
    profile_picture: "https://www.fillmurray.com/200/300",
    handle: "selena_mcclure",
    created_at: "2020-10-26T18:06:22.301Z",
  };

  const [message, setMessage] = useState(fakeUser);
  // Make a request for a user with a given ID
  const fetchData = () => {
    axios
      .get("/api/users")
      .then(function (response) {
        console.log(response.data.message);
        let parsedResponse = JSON.parse(response.data.message);
        console.log(parsedResponse[0]);
        setMessage(parsedResponse[0]);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="container emp-profile">
      <form method="post">
        <div className="row">
          <div className="col-md-4">
            <div className="profile-img flex-row">
              <img src={`${message.profile_picture}`} alt="" />
            </div>
            <div className="file btn btn-lg btn-primary">
              Change Photo
              <input type="file" name="file" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="profile-head">
              <h6>{message.handle}</h6>
              <p className="proile-rating">
                Follows : <span>2471</span>
              </p>
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    id="home-tab"
                    data-toggle="tab"
                    href="#home"
                    role="tab"
                    aria-controls="home"
                    aria-selected="true"
                  >
                    Bio
                  </a>
                </li>
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
              </ul>
            </div>
          </div>
          <div className="col-md-2">
            <input
              type="submit"
              className="profile-edit-btn"
              name="btnAddMore"
              value="Edit Profile"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="profile-work">
              <p>WORK LINK</p>
              <a href="">Website Link</a>
              <br />
              <a href="">Bootsnipp Profile</a>
              <br />
              <a href="">Bootply Profile</a>
              <p>SKILLS</p>
              <a href="">Web Designer</a>
              <br />
              <a href="">Web Developer</a>
              <br />
              <a href="">WordPress</a>
              <br />
              <a href="">WooCommerce</a>
              <br />
              <a href="">PHP, .Net</a>
              <br />
            </div>
          </div>
          <div className="col-md-8">
            <div className="tab-content profile-tab" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <div className="row">
                  <div className="col-md-6">
                    <label>User Id</label>
                  </div>
                  <div className="col-md-6">
                    <p>Kshiti123</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label>Name</label>
                  </div>
                  <div className="col-md-6">
                    <p>Kshiti Ghelani</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label>Email</label>
                  </div>
                  <div className="col-md-6">
                    <p>kshitighelani@gmail.com</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label>Phone</label>
                  </div>
                  <div className="col-md-6">
                    <p>123 456 7890</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label>Profession</label>
                  </div>
                  <div className="col-md-6">
                    <p>Web Developer and Designer</p>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="profile"
                role="tabpanel"
                aria-labelledby="profile-tab"
              >
                <div className="row">
                  <div className="col-md-6">
                    <label>Experience</label>
                  </div>
                  <div className="col-md-6">
                    <p>Expert</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label>Hourly Rate</label>
                  </div>
                  <div className="col-md-6">
                    <p>10$/hr</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label>Total Projects</label>
                  </div>
                  <div className="col-md-6">
                    <p>230</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label>English Level</label>
                  </div>
                  <div className="col-md-6">
                    <p>Expert</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label>Availability</label>
                  </div>
                  <div className="col-md-6">
                    <p>6 months</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <label>Your Bio</label>
                    <br />
                    <p>Your detail description</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default User_Profile;
