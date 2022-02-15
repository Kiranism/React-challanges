// import React, { useState } from "react";

// import packageContext from "./context";

// const Provider = (props) => {
//   const [counter, setCounter] = useState(0);
//   const increase = () => {
//     setCounter(counter + 1);
//   };
//   const decrease = () => {
//     setCounter(counter - 1);
//   };

//   return (
//     <packageContext.Provider value={{ counter, increase, decrease }}>
//       {props.children}
//     </packageContext.Provider>
//   );
// };

// export default Provider;

import React, { useState } from "react";

import packageContext from "./context";

const Provider = (props) => {
  const [count, setCount] = useState(0);
  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count - 1);

  return (
    <packageContext.Provider value={{ count, increase, decrease }}>
      {props.children}
    </packageContext.Provider>
  );
};

export default Provider;
