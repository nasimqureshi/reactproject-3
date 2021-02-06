import React, {Component} from 'react';
import './App.css';

class Status extends Component{
  render(){
    return (
      <div className="status">
        <p>{this.props.mytext}</p>
        <p><button>Like</button></p>
      </div>
    )
  }
}
class App extends Component{
  render(){
    return(
      <div className="App">
        <header className="App-header">
          <Status mytext="Wow, I had the most delicious lunch today" />
          <Status mytext="There was a lot of traffic today" />
          <Status mytext="Finally I finished the big project" />
          <Status mytext="Happy to be learning ReactJS" />
        </header>
      </div>
    )
  }
}

export default App;


