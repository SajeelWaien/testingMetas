import React, { useEffect } from "react";
import MetaTags from "react-meta-tags";
const CustomComponent = ({ label }) => {
  useEffect(() => {
    console.log(
      `${label} created at ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
    );
    return () => console.log(`${label} destroyed`);
  }, [label]);
  return (
    <div>
      <MetaTags>
        <title>Page 1</title>
        <meta name="description" content="Comp2 description." />
        <meta property="og:title" content="Comp2 change" />
        <meta property="og:image" content="Comp2 pathchange/to/image.jpg" />
        <meta property="og:description" content="Comp2 Somechange description" />
        <meta property="twitter:description" content="Comp2 Some change description" />
        <meta property="twitter:title" content="Comp2 some change more titile " />
      </MetaTags>

      {label}
    </div>
  );
};

export default CustomComponent;
