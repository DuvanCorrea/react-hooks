import axios from "axios";

// constans
const initialData = {
  pokes: [],
};

const GET_POKEMONS = "GET_POKEMONS";

// reducer
export default function pokeReducer(state = initialData, action) {
  switch (action.type) {
    case "GET_POKEMONS":
      return { ...state, pokes: action.payload };

    default:
      return state;
  }
}

// actions
export const getPokemosnAction = () => async (dispatch, getState) => {
  try {
    const res = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?offset=0&limit=20"
    );
    dispatch({
      type: GET_POKEMONS,
      payload: res.data.results,
    });
  } catch (error) {}
};
