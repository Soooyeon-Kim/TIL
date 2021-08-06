import React from 'react';

function App() {
  return (
    <div className="App">
    <input onChange={(event)=>{
        console.log(event.targer.value);
    }} />
    </div>
  );
}

export default App;
