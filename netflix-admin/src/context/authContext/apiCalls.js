import axios from "axios";
import { loginFailure, loginSuccess, loginStart } from "./AuthActions";

export const login = async (userDetails, dispatch) => {
  dispatch(loginStart());

  try {
    const response = await axios.post("http://localhost:8000/api/auth/signin", userDetails);
    const admin = response.data.info.isAdmin;
    admin && dispatch(loginSuccess(response.data))
  } catch (error) {
    dispatch(loginFailure());
  }
}
 