import React, { useState } from "react";

import axios from "axios";

const FetchData = () => {
  const [getData, setGetData] = useState({});

  axios
    .get("https://api.github.com/users/deekshasharma")
    .then((response) => setGetData(response.data))
    .catch((error) => console.error(error));

  return (
    <div>
      <h1>{getData.name}</h1>
    </div>
  );
};

export default FetchData;
