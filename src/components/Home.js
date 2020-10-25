import React, {Component} from 'react';
import axios from 'axios';
import '../tailwind.output.css';

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
      <div className="text-center">
        <h1>{this.state.message}</h1>
        <button onClick={this.fetchData} className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" >
          Fetch Data
        </button>
      </div>
    );
  }
}

export default Home;