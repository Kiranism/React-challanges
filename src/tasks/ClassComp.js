import React from "react";

class ClassComp extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "hello",
    };
  }
  render() {
    return <h1>{this.state.name}</h1>;
  }
}

export default ClassComp;
