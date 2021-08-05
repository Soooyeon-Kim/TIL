import './App.css';
import React from 'react';


const data = [
	{
		name: 'eunji',
		age: 100,
		resign: true,
	},
	{
		name: 'sooyeon',
		age: 12,
		resign: false,
	},
	{
		name: 'jihyeon',
		age: 21,
		resign: true,
	},
	{
		name: 'jisoo',
		age: 10,
		resign: false,
	},
]
class App extends React.Component{

  render(){
    return(
      <ul>
      {data.map((el) => {
        return el.resign ? (
          <>
            <li style={{color:'pink'}}>이름 : {el.name}</li>
            <li style={el.age >= 20 ? {color: 'palevioletred'}: {}}>나이 : {el.age}</li>
          </>
        ) : (
          <>
          <li style={{color:'skyblue'}}>이름 : {el.name}</li>
          <li style={el.age >= 10 ? {color: 'slateblue'}: {}}>나이 : {el.age}</li>
        </>
        )
      })}
      </ul>
    );
  }
}


export default App;