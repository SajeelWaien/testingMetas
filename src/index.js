import React, {  useState } from "react";
import ReactDOM from "react-dom";
import CustomComponent from './custom-component'
import CustomComponent1 from './custom-component1'


function App() {
  return (
    <>
        <CustomComponent label="Component 1" />
        <CustomComponent1 label="Component 2" />

    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
