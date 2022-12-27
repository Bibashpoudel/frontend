import axios from "axios";
import getLocal from "../../utils/getlocal";
import { checkUrl } from "../../utils/url";

import {
  ADD_ITEMS_FAIL,
  ADD_ITEMS_LOADING,
  ADD_ITEMS_SUCCESS,
  ADD_PRIVACY_FAIL,
  ADD_PRIVACY_LOADING,
  ADD_PRIVACY_SUCCESS,
  GET_PRIVACY_FAIL,
  GET_PRIVACY_LOADING,
  GET_PRIVACY_SUCCESS,
  GET_TERMS_FAIL,
  GET_TERMS_LOADING,
  GET_TERMS_SUCCESS,
} from "../constant/settings.constants";

const URL = checkUrl();
const token = getLocal();
export const addTerms = (id: any, content: any) => async (dispatch: any) => {
  dispatch({
    type: ADD_ITEMS_LOADING,
    payload: { content },
  });
  try {
    const { data } = await axios.patch(
      `${URL}/setting/add-terms/${id}`,
      {
        termsData: content,
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          Authorization: `Bearer ${token?.access_token}`,
        },
      }
    );
    dispatch({
      type: ADD_ITEMS_SUCCESS,
      payload: data,
    });
  } catch (error: any) {
    dispatch({
      type: ADD_ITEMS_FAIL,
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

export const addPrivacy = (id: any, content: any) => async (dispatch: any) => {
  dispatch({
    type: ADD_PRIVACY_LOADING,
    payload: { content },
  });
  try {
    const { data } = await axios.patch(
      `${URL}/setting/add-privacy/${id}`,
      {
        privacyData: content,
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          Authorization: `Bearer ${token?.access_token}`,
        },
      }
    );
    dispatch({
      type: ADD_PRIVACY_SUCCESS,
      payload: data,
    });
  } catch (error: any) {
    dispatch({
      type: ADD_PRIVACY_FAIL,
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

export const getTerms = () => async (dispatch: any) => {
  dispatch({
    type: GET_TERMS_LOADING,
  });
  try {
    const { data } = await axios.get(`${URL}/setting/terms`);
    dispatch({
      type: GET_TERMS_SUCCESS,
      payload: data,
    });
  } catch (error: any) {
    dispatch({
      type: GET_TERMS_FAIL,
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

export const getPrivacy = () => async (dispatch: any) => {
  dispatch({
    type: GET_PRIVACY_LOADING,
  });
  try {
    const { data } = await axios.get(`${URL}/setting/privacy`);
    dispatch({
      type: GET_PRIVACY_SUCCESS,
      payload: data,
    });
  } catch (error: any) {
    dispatch({
      type: GET_PRIVACY_FAIL,
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
