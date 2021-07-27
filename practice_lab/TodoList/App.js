import { useState } from "react";
import './App.css';

function App() {
  const [todoList, settodoList] = useState([]);
  const [inputValue, setinputValue] = useState("");

  const handLeSubmit = (event) => {
    event.preventDefault();
    settodoList(current => {
      return [
        ...current, 
        {
          id:new Date().getTime(),
          isCompleted:false,
          value : inputValue,
        },
      ];
    });
    setinputValue("");
  };

  const handleCompleteClick = (index) => {
    settodoList((current) => {
      const newList = [...current];
      newList[index].isCompleted = true;
      return newList;
    });
  };

  const handleRemoveClick = (index) => {
    settodoList((current) => {
      const newList = [...current];
      newList.splice(index, 1);
      return newList;
    });
  };

  return (
    <div>
      <ol id="todo-list">
        {todoList.map((item, index) => (
        <li className={item.isCompleted === true ?
          "completed" : ""}>
          <span>{item.value}</span>
          <button onClick={() => handleCompleteClick(index)}
          >완료</button>
          <button onClick={() => handleRemoveClick(index)}
          >삭제</button>
          </li>
      ))}
      </ol>
      <form id="create" onSubmit={handLeSubmit}>
        <input type="text" value={inputValue} onChange={(event) => {
          setinputValue(event.target.value);
        }} />
        <button type="submit">등록</button>
      </form>
    </div>
  );
}

export default App;
