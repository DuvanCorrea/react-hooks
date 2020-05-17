import React, { useState, Fragment } from "react";

const Contador = () => {
  const [arrayNum, setArrayNum] = useState([1, 2, 3, 4, 5]);

  const update = () => {
    setArrayNum([...arrayNum, arrayNum[arrayNum.length - 1] + 1]);
  };

  return (
    <Fragment>
      <button onClick={update}> Button +</button>
      <ul>
        {arrayNum.map((e, i) => (
          <li key={i}>{e}</li>
        ))}
      </ul>
    </Fragment>
  );
};

export default Contador;
