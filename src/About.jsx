import React, { useEffect, useState, Fragment } from "react";

const About = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    obtainData();
  }, []);

  const obtainData = async () => {
    const d = await fetch("https://jsonplaceholder.typicode.com/users");
    const res = await d.json();
    console.log(res);
    setData(res);
  };

  return (
    <Fragment>
      About...
      {data.map((e, i) => (
        <Fragment key={i}>
          <li>{e.name}</li>
        </Fragment>
      ))}
    </Fragment>
  );
};

export default About;
