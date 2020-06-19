import React, { useState } from "react";

function HomePage() {
  const [inputState, setInputState] = useState({
    firstName: "",
    lastName: "",
  });

  const [history, setHistory] = useState([])

  const updateVal = (e) => {
    const { name, value } = e.target;
    setInputState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <>
    <h1>Multiple Inputs with previous State</h1>
      {/* <input type="text"
        onChange={(e) => setInputState(e.target.value)} /> */}
      <div>
        <input
          type="text"
          onChange={updateVal}
          value={inputState.firstName}
          name="firstName"
        />
        <span>First Name:{inputState.firstName}<br/></span>
      </div>
      <div>
        <input
          type="text"
          onChange={updateVal}
          value={inputState.lastName}
          name="lastName"
        />
        <span>Last Name:{inputState.lastName}</span>
      </div>
    </>
  );
}

export default HomePage;
