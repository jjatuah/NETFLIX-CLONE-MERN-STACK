const MovieReducer = (state, action) => {
  switch (action.type) {
    case "GET_MOVIES_START":
      return {
        movies: null,
        isFetching: true,
        error: false,
      };

    case "GET_MOVIES_SUCCESS":
      return {
        movies: action.payload,
        isFetching: false,
        error: false,
      };

    case "GET_MOVIES_FAILURE":
      return {
        movies: null,
        isFetching: false,
        error: true,
      };

    case "DELETE_MOVIE_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };

    case "DELETE_MOVIE_SUCCESS":
      return {
        movies: state.movies.filter((movie) => movie._id !== action.payload),
        isFetching: false,
        error: false,
      };

    case "DELETE_MOVIE_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };

    default:
      return {...state}
  }
}

export default MovieReducer