// Import the React and the ReactDOM libraries
// Using Webpack
import React from 'react';
import ReactDOM from'react-dom';

function getTime(){
  return (
    new Date().toLocaleTimeString()
  )
}

// Create a react component
const App = () =>{
  const buttonText = {text: 'click me!'};
  const labelText = 'Enter name: ';
  return (
  <div style={{fontFamily:'helvetica', background:'#808080', color:'#FFFFFF'}}>
    <h1>Welcome</h1>
    <h2>Practice Time</h2>
    <div>
      <p style={{fontStyle:'bold'}}> The current time is</p>
      <h5 style={{fontStyle:'italic'}}>{getTime()}</h5>
    </div>
    <h2>Practice Form</h2>
    <label className="label" htmlFor="name">{labelText}</label>
    <input id="name" type="text"/>
    <button style={{backgroundColor: 'blue', color:'white'}}>
    {buttonText.text}
    </button>
  </div>
  );
};

//Take the react component and show it on the screen
ReactDOM.render(
  <App />,
  document.querySelector('#root')
);