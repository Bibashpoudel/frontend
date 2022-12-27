import {
  ADD_ITEMS_FAIL,
  ADD_ITEMS_LOADING,
  ADD_ITEMS_RESET,
  ADD_ITEMS_SUCCESS,
  ADD_PRIVACY_FAIL,
  ADD_PRIVACY_LOADING,
  ADD_PRIVACY_RESET,
  ADD_PRIVACY_SUCCESS,
  GET_PRIVACY_FAIL,
  GET_PRIVACY_LOADING,
  GET_PRIVACY_SUCCESS,
  GET_TERMS_FAIL,
  GET_TERMS_LOADING,
  GET_TERMS_SUCCESS,
} from "../constant/settings.constants";

export const addTermsReducer = (state = {}, action: any) => {
  switch (action.type) {
    case ADD_ITEMS_LOADING:
      return {
        loading: true,
      };
    case ADD_ITEMS_SUCCESS:
      return {
        loading: false,
        success: true,
      };
    case ADD_ITEMS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case ADD_ITEMS_RESET:
      return {};
    default:
      return { state };
  }
};

export const addPrivacyReducer = (state = {}, action: any) => {
  switch (action.type) {
    case ADD_PRIVACY_LOADING:
      return {
        loading: true,
      };
    case ADD_PRIVACY_SUCCESS:
      return {
        loading: false,
        success: true,
      };
    case ADD_PRIVACY_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case ADD_PRIVACY_RESET:
      return {};
    default:
      return { state };
  }
};

export const termsinitialState: any = {
  terms: [],
  loading: false,
  error: null,
};
export const getTermsRedcuer = (state = termsinitialState, action: any) => {
  switch (action.type) {
    case GET_TERMS_LOADING:
      return {
        loading: true,
      };
    case GET_TERMS_SUCCESS:
      return {
        loading: false,
        terms: action.payload,
      };
    case GET_TERMS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return { state };
  }
};

export const privacyinitialState: any = {
  privacy: [],
  loading: false,
  error: null,
};
export const getPrivacyRedcuer = (state = privacyinitialState, action: any) => {
  switch (action.type) {
    case GET_PRIVACY_LOADING:
      return {
        loading: true,
      };
    case GET_PRIVACY_SUCCESS:
      return {
        loading: false,
        privacy: action.payload,
      };
    case GET_PRIVACY_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return { state };
  }
};
