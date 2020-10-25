import React, {Component} from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import '../App.scss';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'Click the button to load data!'
    };
  };

  fetchData = () => {
    axios.get('/api/data') // You can simply make your requests to "/api/whatever you want"
      .then((response) => {
        // handle success
        console.log(response.data); // The entire response from the Rails API

        console.log(response.data.message); // Just the message
        this.setState({
          message: response.data.message
        });
      });
  };

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={this.fetchData} >
          Fetch Data
        </button>
      </div>
    );
  }
}

export default Home;