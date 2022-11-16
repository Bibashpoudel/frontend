import {
  NEWS_SUBMIT_FAIL,
  NEWS_SUBMIT_LOADING,
  NEWS_SUBMIT_SUCCESS,
} from "../constant/news.constants";

export const userSigninReducer = (state = {}, action: any) => {
  switch (action.type) {
    case NEWS_SUBMIT_LOADING:
      return {
        loading: true,
      };
    case NEWS_SUBMIT_SUCCESS:
      return {
        loading: false,
        userInfo: action.payload,
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
