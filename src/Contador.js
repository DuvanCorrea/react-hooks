import React, { Fragment, useState } from "react";
import { useForm } from "react-hook-form";

const Contador = () => {
  const { register, error, handleSubmit } = useForm();

  const onSend = (data, e) => {
    setEntrance([...Entrance, data]);
    e.target.reset();
  };

  const [Entrance, setEntrance] = useState([]);

  return (
    <Fragment>
      <h1>Example #1</h1>
      <form onSubmit={handleSubmit(onSend)}>
        <input
          name="title"
          placeholder="title"
          ref={register({
            required: { value: true, message: "title require" },
          })}
        ></input>
        <p>{error?.title?.message}</p>
        <input
          name="description"
          placeholder="description"
          ref={register({
            required: { value: true, message: "description require" },
            minLength: { value: 5, message: "min 5" },
          })}
        ></input>
        <p>{error?.description?.message}</p>
        <button>Send</button>
      </form>
      <ul>
        {Entrance.map((e, i) => (
          <Fragment>
            <li key={i}>
              <strong>Title</strong> {e.title}
            </li>
            <p>
              <strong>Description</strong> {e.description}
            </p>
          </Fragment>
        ))}
      </ul>
    </Fragment>
  );
};

export default Contador;
