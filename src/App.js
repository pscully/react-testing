import React, { Component } from 'react';
import './App.css';

const rounds = [
  {
    name: 'Round Number One',
    course: 'Monroe Country Club',
    score: 95,
    object_ID: 0
  },
  {
    name: 'Round Number Two',
    course: 'Stonebridge',
    score: 92,
    object_ID: 1
  }
];

class App extends Component {
  constructor() {
    super()
    this.state = {
      rounds: rounds,
      searchTerm: ''
    }
  }

  onDismiss(id) {
    const isNotId = item => item.object_ID !== id;
    const updatedRounds = this.state.rounds.filter(isNotId);
    this.setState({rounds: updatedRounds})
  }

  onSearchChange = event => {
     this.setState({
       searchTerm: event.target.value
     })
  }

  filteredRounds = searchTerm => item => {
      return item.name.toLowerCase().includes(searchTerm.toLowerCase());
  }

  clearSearch = () => {
    const searchBox = document.getElementById('searchBox');
    searchBox.value = '';
    this.setState({
      searchTerm: ''
    })
  }

  render() { 
    return ( 
      <div className="rounds">
      <h1>My Recent Rounds</h1>
      <form>
        <input 
        id="searchBox"
        type="text"
        onChange={this.onSearchChange}
         />
      </form>
      <button
        type="button"
        onClick={this.clearSearch}
      >
        Clear Search
      </button>
      {this.state.rounds.filter(this.filteredRounds(this.state.searchTerm)).map(item =>
        <div className="myrounds">
        <h3>{item.name}</h3>
        <h3>{item.course}</h3>
        <span>
        <button
          onClick={() => this.onDismiss(item.object_ID)}
          type="button"
        >
          Remove Round
        </button>
        </span>
        </div>
        )}
        </div>
     );
  }
}
 
export default App;

