import React, { useState } from "react";

const StateHook = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    const updateCount = count + 1;
    console.log(`clicked ${updateCount} times!`);
    setCount(updateCount);
  };

  console.log("i rendered!");

  return (
    <div>
      <button onClick={handleClick}>click me</button>
    </div>
  );
};

export default StateHook;
