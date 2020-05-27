import React from "react";
import ReactDOM from "react-dom";
import './index.css';

class Component extends React.Component{
constructor(props){
    super(props);
    this.state = {
      output: 'unchanged'
    }
    this.handleButton = this.handleButton.bind(this);
  }

  handleButton(){
    this.setState({
       output: 'changed'
    })
  }

render(){
  let quotes = [{
   "name" : "Henry Ford",
   "quote": "Don't find the fault, find the remedy"
},{
  "name" : "Nelson Mandela",
  "quote": "I learned that courage was not the absence of fear, but the triumph over it."
},{
  "name" : "Seneca",
  "quote": "There is no easy way from the earth to the stars."

},{
  "name" : "Napoleon Bonaparte",
  "quote": "Victory is not always winning the battle...but rising every time you fall."
},{
  "name" : "Plato",
  "quote": "Reality is created by the mind, we can change our reality by changing our mind."
}];
  let random = Math.floor(Math.random() * quotes.length)
  return(
    <body>
      <div className = "quotes_wrap">
      <h1>"{quotes[random].quote}"</h1>
      <h1>{quotes[random].name}</h1>
      </div>
      <button onClick = {this.handleButton}>generate</button>
    </body>
  )
}
}
ReactDOM.render(<Component />, document.getElementById('root'))
