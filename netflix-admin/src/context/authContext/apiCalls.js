import axios from "axios";
import { loginFailure, loginSuccess, loginStart } from "./AuthActions";

export const login = async (user, dispatch) => {
  dispatch(loginStart());

  try {
    const response = await axios.post("http://localhost:8000/api/auth/signin", user);
    dispatch(loginSuccess(response.data))
  } catch (error) {
    dispatch(loginFailure());
  }
}
