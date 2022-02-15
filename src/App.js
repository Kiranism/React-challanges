import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";
import Counter from "./tasks/Counter";
import FetchData from "./tasks/FetchData";
import SearchList from "./tasks/SearchList";

import Provider from "./provider";
import Context from "./context";
import ContextCounter from "./tasks/ContextCounter";
import ClassComp from "./tasks/ClassComp";
import RefHook from "./tasks/RefHook";
import StateHook from "./tasks/StateHook";
import TernaryOp from "./tasks/TernaryOp";
import onClick from "./tasks/onClick";
const App = () => {
  return (
    <div>
      {/* <Provider>
        <ContextCounter />
      </Provider>  */}
      {/* <SearchList />
      <ClassComp /> */}
      {/* <RefHook /> */}
      {/* <StateHook />
      <TernaryOp /> */}

      <BrowserRouter>
        <Switch>
          <Route path="/">
            <onClick />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
