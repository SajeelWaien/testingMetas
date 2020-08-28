import React, { Suspense, useState } from "react";
import ReactDOM from "react-dom";

const CustomComponent = React.lazy(
  () =>
    new Promise((resolve, reject) =>
      setTimeout(() => resolve(import("./custom-component")), 100)
    )
);

const CustomComponent2 = React.lazy(
  () =>
    new Promise((resolve, reject) =>
      setTimeout(() => resolve(import("./custom-component1")), 5000)
    )
);

function App() {
  const [state, setState] = useState(true);
  const handle = () => {
    setState(!state);
  };
  return (
    <>
      <button onClick={handle}>toggle</button>

      <Suspense fallback={<div>Loading</div>}>
        <CustomComponent label="Component 1" />
      </Suspense>

      <Suspense fallback={<div>Loading</div>}>
        <CustomComponent2 label="Component 2" />
      </Suspense>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
