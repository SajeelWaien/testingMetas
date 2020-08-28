import React, { useEffect } from "react";
import MetaTags from "react-meta-tags";
const CustomComponent1 = ({ label }) => {
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
        <meta name="description" content="Some descriptionchange." />
        <meta property="og:title" content="change" />
        <meta property="og:image" content="pathchange/to/image.jpg" />
        <meta property="og:description" content="Somechange description" />
        <meta property="twitter:description" content="Some change description" />
        <meta property="twitter:title" content="some change more titile " />
      </MetaTags>

      {label}
    </div>
  );
};

export default CustomComponent1;
