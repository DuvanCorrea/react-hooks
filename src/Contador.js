import React, { Fragment } from "react";
import { useForm } from "react-hook-form";

const Contador = () => {
  const { register, error, handleSubmit } = useForm();

  const showData = (data, e) => {
    console.log(data);
  };

  return (
    <Fragment>
      <form onSubmit={handleSubmit(showData)}>
        <input
          name="input"
          ref={register({
            required: { value: true, message: "Input obligatorio" },
          })}
        ></input>
        <input
          name="input2"
          ref={register({
            required: { value: true, message: "Input2 obligatorio" },
          })}
        ></input>
        <span>{error?.input?.message}</span>
        <button>Send</button>
      </form>
    </Fragment>
  );
};

export default Contador;
