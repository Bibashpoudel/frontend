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

export const newsReducer = (state = {}, action: any) => {
  switch (action.type) {
    case NEWS_SUBMIT_LOADING:
      return {
        loading: true,
      };
    case NEWS_SUBMIT_SUCCESS:
      return {
        loading: false,
        success: action.payload,
      };

    case NEWS_SUBMIT_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const contactUsReducer = (state = {}, action: any) => {
  switch (action.type) {
    case CONTACT_US_LOADING:
      return {
        loading: true,
      };
    case CONTACT_US_SUCCESS:
      return {
        loading: false,
        success: action.payload,
      };
    case CONTACT_US_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

const newsState: any = {
  news: [],
  loading: false,
  error: null,
};
export const getnewsReducer = (state = newsState, action: any) => {
  switch (action.type) {
    case NEWS_LIST_LOADING:
      return {
        loading: true,
      };
    case NEWS_LIST_SUCCESS:
      return {
        loading: false,
        news: action.payload,
      };
    case NEWS_LIST_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return { state };
  }
};

const messageState: any = {
  messages: [],
  loading: false,
  error: null,
};

export const getmessageReducer = (state = messageState, action: any) => {
  switch (action.type) {
    case CONTACT_LIST_LOADING:
      return {
        loading: true,
      };
    case CONTACT_LIST_SUCCESS:
      return {
        loading: false,
        messages: action.payload,
      };
    case CONTACT_LIST_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return {
        state,
      };
  }
};
