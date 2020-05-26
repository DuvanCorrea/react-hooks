import axios from "axios";

// constans
const initialData = {
  pokes: [],
  actualPage: 0,
};

const GET_POKEMONS = "GET_POKEMONS";
const NEXT_PAGE = "NEXT_PAGE";
const PREVIUS_PAGE = "PREVIUS_PAGE";

// reducer
export default function pokeReducer(state = initialData, action) {
  switch (action.type) {
    case "GET_POKEMONS":
      return { ...state, pokes: action.payload };

    case "NEXT_PAGE":
      return { ...state, pokes: action.payload, actualPage: action.actualPage };

    case "PREVIUS_PAGE":
      return { ...state, pokes: action.payload, actualPage: action.actualPage };

    default:
      return state;
  }
}

// actions
export const getPokemosnAction = () => async (dispatch, getState) => {
  const actualPage = getState().pokemons.actualPage;
  console.log(actualPage);

  try {
    const res = await axios.get(
      `https://pokeapi.co/api/v2/pokemon?offset=${actualPage}&limit=20`
    );
    dispatch({
      type: GET_POKEMONS,
      payload: res.data.results,
      actualPage: actualPage,
    });
  } catch (error) {}
};

export const nextPage = () => async (dispatch, getState) => {
  const actualPage = getState().pokemons.actualPage + 20;
  console.log(actualPage);

  const res = await axios.get(
    `https://pokeapi.co/api/v2/pokemon?offset=${actualPage}&limit=20`
  );

  dispatch({
    type: NEXT_PAGE,
    payload: res.data.results,
    actualPage: actualPage,
  });
};

export const previousPage = () => async (dispatch, getState) => {
  const actualPage = getState().pokemons.actualPage - 20;
  console.log(actualPage);

  const res = await axios.get(
    `https://pokeapi.co/api/v2/pokemon?offset=${actualPage}&limit=20`
  );

  dispatch({
    type: PREVIUS_PAGE,
    payload: res.data.results,
    actualPage: actualPage,
  });
};
