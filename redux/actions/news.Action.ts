import axios from "axios";
import {
  CONTACT_US_FAIL,
  CONTACT_US_LOADING,
  CONTACT_US_SUCCESS,
  NEWS_SUBMIT_FAIL,
  NEWS_SUBMIT_LOADING,
  NEWS_SUBMIT_SUCCESS,
} from "../constant/news.constants";
const URL = process.env.NEXT_PUBLIC_SERVER_URL;

export const NewsletterSubmit = (email: any) => async (dispatch: any) => {
  dispatch({
    type: NEWS_SUBMIT_LOADING,
    payload: email,
  });
  try {
    const { data } = await axios.post(
      `${URL}/contact/news-letter`,
      { email },
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
    dispatch({
      type: NEWS_SUBMIT_SUCCESS,
      payload: data,
    });
  } catch (error: any) {
    dispatch({
      type: NEWS_SUBMIT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response.data.detail
          ? error.response.data.detail
          : error.message
          ? error.message
          : error,
    });
  }
};
export const contactUS =
  (fullName: any, phone: any, message: any, email: any) =>
  async (dispatch: any) => {
    dispatch({
      types: CONTACT_US_LOADING,
      payload: { fullName, phone, message, email },
    });
    try {
      const { data } = await axios.post(`${URL}/contact/send-message`, {
        fullName: fullName,
        email: email,
        phone: phone,
        message: message,
      });
      dispatch({
        type: CONTACT_US_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: CONTACT_US_FAIL,
        payload: error,
      });
    }
  };
