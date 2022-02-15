import React, { useRef } from "react";

const RefHooks = () => {
  const countRef = useRef(0);

  const handleClick = () => {
    countRef.current++;
    console.log(`clicked ${countRef.current} times`);
  };
  console.log("i rendered");

  return (
    <div>
      <button onClick={handleClick}>click me</button>
    </div>
  );
};

export default RefHooks;
