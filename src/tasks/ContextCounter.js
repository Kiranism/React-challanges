// import React, { useState, useContext } from "react";
// import packageContext from "../context";
// const ContextCounter = () => {
//   const { counter, increase, decrease } = useContext(packageContext);

//   return (
//     <div>
//       <button onClick={decrease}>-</button>
//       <p>counter :{counter}</p>
//       <button onClick={increase}>+</button>
//     </div>
//   );
// };

// export default ContextCounter;

import React, { useContext } from "react";

import packageContext from "../context";

const ContextCounter = () => {
  const { count, increase, decrease } = useContext(packageContext);
  return (
    <div>
      <button onClick={increase}>-</button>
      <p>Counter :{count}</p>
      <button onClick={decrease}>+</button>
    </div>
  );
};

export default ContextCounter;
