import React, { useState } from "react";

const TernaryOp = () => {
  const [clicked, setClicked] = useState("false");

  const handleClick = () => {
    const authenticated = setClicked((value) => !value);
  };

  return (
    <div>
      <button onClick={handleClick}>click me now</button>

      {authenticated ? <h1>hey</h1> : <h1>not found</h1>}
    </div>
  );
};

export default TernaryOp;
