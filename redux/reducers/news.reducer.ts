import {
  CONTACT_US_FAIL,
  CONTACT_US_LOADING,
  CONTACT_US_SUCCESS,
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
