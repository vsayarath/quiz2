import React from 'react';
import './App.css';
import randomizer from "randomizer.js"
import Sentences from "./Components/Sentences"
class App extends React.Components{

  constructor() {
	super();
	this.state({
	 data: {
	 sentence1:"",
	 sentence2:"",

	}
	})
   };

  handleChange = () => {

	this.setState({
	   data: {
		sentence1: "",
		sentence2: "",
	   }

	})
	}

  render() {
  const rand = randomizer();

  return (
    <div>
    <button onClick = {this.handleChange()}>Click me</button>
    <Sentences sentence1 = {this.state.data.sentence1}/>
    <Sentences sentence2 = {this.state.data.sentence2}/>
    </div>
  );
}
}


export default App;
