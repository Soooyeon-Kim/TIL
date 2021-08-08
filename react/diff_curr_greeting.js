import React from 'react';

const Greeting =()=> {
    const handleClick = () => {
        alert("안녕하세요.");
    }
    return <button onClick={handleClick}>클릭</button>;
}

export default Greeting;