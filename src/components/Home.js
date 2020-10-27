import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.scss";

export default function Home() {
  // const [message, setMessage] = useState("Click to fetch data!")
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get("/api/twists/1")
      .then((result) => {
        setData(result.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  // const fetchData = () => {
  //   axios.get('/api/data') // You can simply make your requests to "/api/whatever you want"
  //     .then((response) => {
  //       // handle success
  //       console.log(response.data); // The entire response from the Rails API

  //       console.log(response.data.message); // Just the message
  //       setMessage(
  //         response.data.message
  //       );
  //     });
  // };

  return (
    <div className="container mw-100">
      {/* <div>
          <h1>{message}</h1>
          <button onClick={fetchData} >
            Fetch Data
          </button>
        </div> */}
      <div className="row">
        <div className="col-sm-6 text-center">
          <img src="http://www.fillmurray.com/500/500" alt=""></img>
        </div>
        <div className="col-sm-6">
          <h2>Heading</h2>
          <p>
            This is a bunch of text that is repeated a lot.This is a bunch of
            text that is repeated a lot.This is a bunch of text that is repeated
            a lot.This is a bunch of text that is repeated a lot.This is a bunch
            of text that is repeated a lot.This is a bunch of text that is
            repeated a lot.This is a bunch of text that is repeated a lot.This
            is a bunch of text that is repeated a lot.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="bg-success col-sm-6 text-center">
          <p>Fork It Favorites</p>
          <div>{JSON.stringify(data)}</div>
          <ul></ul>
          <img src="http://www.fillmurray.com/500/500" alt=""></img>
        </div>
        <div className="bg-info col-sm-6 text-center">
          <p>Random Twists</p>
          <img src="http://www.fillmurray.com/500/500" alt=""></img>
        </div>
      </div>
    </div>
  );
}
