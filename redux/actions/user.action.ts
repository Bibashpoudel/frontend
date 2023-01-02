import axios from "axios";
import { checkUrl } from "../../utils/url";
import {
  USER_SIGNIN_FAIL,
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNOUT,
} from "../constant/user.constants";

const URL = checkUrl();

export const Signin = (email: any, password: any) => async (dispatch: any) => {
  dispatch({
    type: USER_SIGNIN_REQUEST,
    payload: { email, password },
  });
  try {
    const { data } = await axios.post(
      `${URL}/auth/login`,
      { username: email, password },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    dispatch({
      type: USER_SIGNIN_SUCCESS,
      payload: data,
    });

    localStorage.setItem("userInfo", JSON.stringify(data));
    sessionStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error: any) {
    dispatch({
      type: USER_SIGNIN_FAIL,
      payload:
        error && error?.response?.data?.message
          ? error?.response?.data?.message
          : error?.response?.data?.detail
          ? error?.response?.data?.detail
          : error?.message
          ? error?.message
          : error,
    });
  }
};

export const signout = () => (dispatch: any) => {
  localStorage.removeItem("userInfo");
  localStorage.removeItem("cartItems");
  localStorage.removeItem("profile");
  sessionStorage.removeItem("userInfo");

  dispatch({
    type: USER_SIGNOUT,
  });
};
