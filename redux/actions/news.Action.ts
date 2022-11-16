import axios from "axios";
import {
  NEWS_SUBMIT_FAIL,
  NEWS_SUBMIT_LOADING,
  NEWS_SUBMIT_SUCCESS,
} from "../constant/news.constants";

axios.defaults.baseURL = "localhost:5001/api/v1";

export const NewsletterSubmit = (email: string) => async (dispatch: any) => {
  dispatch({
    type: NEWS_SUBMIT_LOADING,
    payload: email,
  });
  try {
    const { data } = await axios.post(
      "/subscribe",
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
  } catch (error) {
    dispatch({
      type: NEWS_SUBMIT_FAIL,
      payload: error,
    });
  }
};
