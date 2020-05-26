import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { getPokemosnAction, nextPage, previousPage } from "../redux/pokeDucks";

const Pokemons = () => {
  const dispatch = useDispatch();

  const pokemosn = useSelector((store) => store.pokemons.pokes);
  console.log(pokemosn);

  return (
    <div>
      <h1>lits of pokemosn</h1>
      <button onClick={() => dispatch(getPokemosnAction())}>
        Get pokemosn
      </button>
      {pokemosn.map((poke, i) => (
        <li key={i}>{poke.name}</li>
      ))}

      <button onClick={() => dispatch(previousPage())}>previous</button>
      <button onClick={() => dispatch(nextPage())}>next</button>
    </div>
  );
};

export default Pokemons;
