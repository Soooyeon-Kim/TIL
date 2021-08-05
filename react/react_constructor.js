import './App.css';
import React from 'react';

class App extends React.Component {
	// TODO
	constructor(props){
		super(props);
		this.state = {
			name:'sooyeon',
		}
		this.onClickHandler = this.onClickHandler.bind(this);
	}

	onClickHandler(){
		alert(this.state.name);
	}
	
  render() {
    return (
      <div>
        <div>Hello, React!</div>
				<button onClick={this.onClickHandler}>click!</button>
      </div>
    );
  }
}

export default App;