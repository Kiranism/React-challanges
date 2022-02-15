import React from "react";
import { Redirect } from "react-router-dom";
const onClick = () => {
  const handleClick = () => {
    return Redirect("/");
  };
  return (
    <div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo
        nostrum voluptate aliquid iure ea eum dignissimos, dolores vero, saepe
        obcaecati deserunt magnam porro reiciendis fugiat? Dolor dignissimos
        incidunt natus in!
      </p>
      <button onClick={handleClick}>hi</button>
    </div>
  );
};

export default onClick;
