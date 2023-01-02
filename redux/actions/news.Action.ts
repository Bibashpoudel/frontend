import axios from "axios";
import getLocal from "../../utils/getlocal";
import { checkUrl } from "../../utils/url";
import {
  CONTACT_LIST_FAIL,
  CONTACT_LIST_LOADING,
  CONTACT_LIST_SUCCESS,
  CONTACT_US_FAIL,
  CONTACT_US_LOADING,
  CONTACT_US_SUCCESS,
  NEWS_LIST_FAIL,
  NEWS_LIST_LOADING,
  NEWS_LIST_SUCCESS,
  NEWS_SUBMIT_FAIL,
  NEWS_SUBMIT_LOADING,
  NEWS_SUBMIT_SUCCESS,
} from "../constant/news.constants";

const token = getLocal();
const URL = checkUrl();

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
    } catch (error: any) {
      dispatch({
        type: CONTACT_US_FAIL,
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

export const getContactUs = (page: any, size: any) => async (dispatch: any) => {
  dispatch({
    type: CONTACT_LIST_LOADING,
  });
  try {
    const { data } = await axios.get(
      `${URL}/contact/message?page=${page}&size=${size}`,
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          Authorization: `Bearer ${token?.access_token}`,
        },
      }
    );
    dispatch({
      type: CONTACT_LIST_SUCCESS,
      payload: data,
    });
  } catch (error: any) {
    dispatch({
      type: CONTACT_LIST_FAIL,
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

export const getNewsLetter =
  (page: any, size: any) => async (dispatch: any) => {
    dispatch({
      type: NEWS_LIST_LOADING,
    });
    try {
      const { data } = await axios.get(
        `${URL}/contact/news-letter/users?size=${size}&page=${page}`,
        {
          headers: {
            Authorization: `Bearer ${token.access_token}`,
            "Content-Type": "application/json",
          },
        }
      );
      dispatch({
        type: NEWS_LIST_SUCCESS,
        payload: data,
      });
    } catch (error: any) {
      dispatch({
        type: NEWS_LIST_FAIL,
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
