import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Profile.scss";
import axios from "axios";

function User_Profile() {
  const fakeUser = {
    id: 100,
    email: "charla@oconnell.com",
    profile_picture: "https://www.fillmurray.com/200/300",
    handle: "evia.pouros",
    created_at: "2020-10-26T23:07:26.000Z",
    updated_at: "2020-10-26T23:07:26.000Z",
    name: "Everett Predovic",
    bio:
      "Labore et excepturi vero expedita aut reiciendis laboriosam inventore fugiat voluptatum a ipsum itaque sapiente accusamus amet doloribus aliquid necessitatibus laborum quasi ea illo numquam temporibus aperiam voluptatem aut aut odit repellat ut occaecati quo id vero est asperiores natus fuga et architecto consequuntur atque est nobis eum sed officia nemo voluptatem ullam quas ut veniam vitae iusto et sequi quis ut sint nulla asperiores cumque similique veritatis in quia a velit sunt nihil suscipit sit voluptate iure placeat natus doloribus tempora voluptate et eum suscipit saepe error deserunt velit ipsa consequatur in accusantium laudantium non consequatur eveniet et provident delectus esse qui aspernatur nam tempore eligendi exercitationem iste eius ea nisi qui consequatur quis excepturi sapiente corporis reprehenderit voluptatum omnis eos hic voluptatem quia blanditiis recusandae quidem ut quo dicta doloremque sit dolor qui quia est repellat nostrum tenetur cupiditate aspernatur et impedit assumenda necessitatibus cupiditate id assumenda quos magnam et sed dolores et reprehenderit tempore dolores impedit dolorum illum omnis ea iste libero cum hic perferendis rem veniam voluptatem culpa deleniti placeat quos ea minus facilis enim labore est deserunt itaque maiores quas consequatur et non adipisci nesciunt aut quaerat voluptatem qui rem ipsam esse numquam magni ab ipsum et nesciunt quae sed exercitationem dignissimos est minus debitis dolor fugiat dolores ut culpa id voluptates libero vel aut maxime aperiam error molestiae voluptas soluta perspiciatis quibusdam eum perspiciatis quaerat qui praesentium magnam atque autem est eius est dolorem laudantium odio nihil tenetur distinctio neque recusandae molestias amet earum porro quisquam beatae sunt alias dicta expedita non unde perferendis rerum saepe facilis dolorem maiores sit et explicabo praesentium voluptatibus nam maxime voluptas repellendus aut non nemo porro laboriosam neque accusantium totam mollitia facere alias id dolor repellendus molestiae ullam vitae quis ut aliquam omnis et qui quam ad minima ex commodi sunt beatae ex aut odio eum at blanditiis temporibus officiis sunt dolore quia odit illo pariatur et quo ipsa sequi nostrum incidunt quod dolorem dolorem consequatur ut repudiandae qui cum provident fugit minima totam optio occaecati ab omnis sit consectetur quis aliquid vel vel quia modi rerum ut sed laborum aut eaque tempora et cumque ad qui iure doloremque distinctio voluptatem incidunt animi rerum illum molestiae non eos et ut est quo earum voluptatem eligendi velit dolor non facere ratione enim quae consequuntur nobis rerum dignissimos sit molestiae ducimus iusto harum molestias nihil debitis corrupti quia sed nulla?",
  };

  const [message, setMessage] = useState(fakeUser);
  // Make a request for a user with a given ID
  const fetchData = () => {
    axios
      .get("/api/users/:55")
      .then(function (response) {
        console.log(response.data.message);
        // let parsedResponse = JSON.parse(response.data.message);
        // console.log(parsedResponse);
        setMessage(response);
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
            <div className="profile-img">
              <img src={`${message.profile_picture}`} alt="" />
            </div>
            <div className="file btn btn-lg btn-primary">
              Change Photo
              <input type="file" name="file" />
            </div>
            <div></div>
          </div>
          <div className="col-md-6">
            <div className="profile-head">
              <h5>{message.name}</h5>
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
              {message.bio}
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
          <h1>Consider using this space for Twists?</h1>
        </div>
      </form>
    </div>
  );
}

export default User_Profile;
