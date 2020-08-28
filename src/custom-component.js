import React, { useEffect } from "react";

const CustomComponent = ({ label }) => {
  useEffect(() => {
    console.log(
      `${label} created at ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
    );
    return () => console.log(`${label} destroyed`);
  }, [label]);

  return <div>{label}</div>;
};

export default CustomComponent;
