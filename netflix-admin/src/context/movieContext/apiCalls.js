import axios from "axios";
import { getMoviesFailure, getMoviesSuccess, getMoviesStart } from "./MovieActions";


export const getMovies = async (dispatch) => {
  // dispatch(getMoviesStart());

  try {
    const response = await axios.get("http://localhost:8000/api/movie", {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken
      },
    });
    dispatch(getMoviesSuccess(response.data))
  } catch (error) {
    dispatch(getMoviesFailure())
  }
}
