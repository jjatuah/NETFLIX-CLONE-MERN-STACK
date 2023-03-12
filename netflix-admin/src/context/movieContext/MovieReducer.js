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

    default:
      return {...state}
  }
}

export default MovieReducer