import React, { useState, Fragment } from "react";

const Contador = () => {
  const [num, setNum] = useState(0);

  const update = () => {
    setNum(num + 1);
  };

  return (
    <Fragment>
      Contador {num}
      <button onClick={update}> Button +</button>
    </Fragment>
  );
};

export default Contador;
