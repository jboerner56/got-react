import React from 'react';
import './App.css';
import Axios from 'axios';
import Character from './Character'
// install axios, optional
// need a class component
// add ajax requests (componentDidMount it the "earliest")
class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      pageNumber: 1,
      characters: []
    };
  }
  componentDidMount() {
    this._getCharactersForPage();
  }
  render() {
    return (
      <div> 
        <button onClick={this._decrementPageNumber}>Previous</button>
        <button onClick={this._incrementPageNumber}>Next</button>
        {this.state.characters.map(character => <Character data={character}/>)}
      </div>
    );
  }

  _getCharactersForPage = async (pageNumber=1) => {
    const response = await Axios.get(`https://www.anapioficeandfire.com/api/characters?page=${this.state.pageNumber}&pageSize=10`);
    this.setState({
      characters: response.data
    });
  }
  _incrementPageNumber = () => {
    this.setState({
      pageNumber: this.state.pageNumber + 1,

    }, this._getCharactersForPage);
  }
  _decrementPageNumber = () => {
    this.setState({
      pageNumber: this.state.pageNumber - 1
    }, this._getCharactersForPage);

  }
}
export default App;
