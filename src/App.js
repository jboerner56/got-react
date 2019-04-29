import React from 'react';
import './App.css';
import Axios from 'axios';
// install axios, optional
// need a class component
// add ajax requests (componentDidMount it the "earliest")
class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      character: {}
    };
  }
  async componentDidMount() {
    const response = await Axios.get('url to API')
    this.setState({
      character: response.data
    });
  }
  render() {
    return (
      <div className="App">
        <ul>
          <li>name: {this.state.character.name}</li>
          <li>born: {this.state.character.born}</li>
          <li>culture: {this.state.character.culture}</li>
        </ul>
      </div>
    )
  }
}

export default App;
