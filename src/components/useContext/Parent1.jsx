import React, { useContext } from "react";
import context from "./Context";

import Child from "./Child";
const Parent1 = () => {
  console.log("Parent1 Called");

  const theme = useContext(context);
  return (
    <>
      <div className={theme ? "dark" : "light"}>
        <div>Parent1</div>
        <Child />
      </div>
    </>
  );
};

export default Parent1;
