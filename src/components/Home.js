  import React, { useState } from 'react';
  import axios from 'axios';
  import "bootstrap/dist/css/bootstrap.min.css";
  import '../App.scss';
  


  export default function Home() {
      const [message, setMessage] = useState("Click to fetch data!")

    const fetchData = () => {
      axios.get('/api/data') // You can simply make your requests to "/api/whatever you want"
        .then((response) => {
          // handle success
          console.log(response.data); // The entire response from the Rails API

          console.log(response.data.message); // Just the message
          setMessage(
            response.data.message
          );
        });
    };

      return (
        
      <div class="container mw-100">    
       <div>
        <h1>{message}</h1>
        <button onClick={fetchData} >
          Fetch Data
        </button>
      </div>
        <div class="row">
          <div class="col-sm-6 text-center">
            <img src="http://www.fillmurray.com/500/500" alt=""></img>
          </div>
          <div class="col-sm-6">
            <h2>Heading</h2>
            <p>This is a bunch of text that is repeated a lot.This is a bunch of text that is repeated a lot.This is a bunch of text that is repeated a lot.This is a bunch of text that is repeated a lot.This is a bunch of text that is repeated a lot.This is a bunch of text that is repeated a lot.This is a bunch of text that is repeated a lot.This is a bunch of text that is repeated a lot.</p>
          </div>
        </div>
        <div class="row">
          <div class="bg-success col-sm-6 text-center">
            <p>Fork It Favorites</p>
          <img src="http://www.fillmurray.com/500/500" alt=""></img>
          </div>
          <div class="bg-info col-sm-6 text-center">
            <p>Random Twists</p>
          <img src="http://www.fillmurray.com/500/500" alt=""></img>
          </div>
        </div>
      </div>
      );
  }