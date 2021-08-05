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
        if (el.resign) {
        return (
          <>
            <li style={{color:'gold'}}>이름 : {el.name}</li>
            <li>나이 : {el.age}</li>
          </>
        );
        }
        return (
          <>
            <li>이름 : {el.name}</li>
            <li>나이 : {el.age}</li>
          </>
        );
      })}
      </ul>
    );
  }
}


export default App;