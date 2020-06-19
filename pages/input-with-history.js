import React, { useState } from "react";

function HomePage() {
  const [inputState, setInputState] = useState('');

  const [history, setHistory] = useState([])

  return (
    <>
    <h1>Input with its history</h1>
      <div>
        <input
          type="text"
          onChange={(e) => {
            setInputState(e.target.value);
            setHistory([...history, e.target.value])
          }}
          value={inputState}
          name="firstName"
        />
        <div>First Name:{inputState}<br/></div>
        <hr/>
       <hr/>
       <div>
       {
          history.map(itm => {
          return <div>{itm}</div>
          })
        }
       </div>
      </div>
     
    </>
  );
}

export default HomePage;
