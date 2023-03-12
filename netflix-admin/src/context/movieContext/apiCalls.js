import axios from "axios";
import { getMoviesFailure, getMoviesSuccess, getMoviesStart, deleteMovieStart, deleteMovieSuccess, deleteMovieFailure} from "./MovieActions";


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

//Delete

export const deleteMovie = async (id, dispatch) => {
  dispatch(deleteMovieStart());

  try {
    await axios.delete("http://localhost:8000/api/movie/" + id, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken
      },
    });
    dispatch(deleteMovieSuccess(id))
  } catch (error) {
    dispatch(deleteMovieFailure())
  }
}