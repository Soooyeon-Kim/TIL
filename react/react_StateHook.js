import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import React, { useState } from 'react'

const User = () => {
  const [nickname, setNickname] = useState('')

  const updateNickname = event => {
    // nickname 변수에 event를 이용해 사용자가 입력한 값을 삽입
    const nickname = event.target;
    // setNickname의 매개변수로 nickname을 넘겨줌
    setNickname(event.target.value)
  }

  return (
    <div>
      <label>{nickname}</label>
      <br/>
      <input 
        value={nickname} 
        onChange={updateNickname} 
      />
    </div>
  )
}

ReactDOM.render(<User />,document.getElementById('root'));

serviceWorker.unregister();
