import { Blob } from "buffer";
import { stat } from "fs";
import {
  APPLY_JOB_FAIL,
  APPLY_JOB_LOADING,
  APPLY_JOB_RESET,
  APPLY_JOB_SUCCESS,
  JOB_ADD_FAIL,
  JOB_ADD_LOADING,
  JOB_ADD_SUCCESS,
  JOB_DETAILS_FAIL,
  JOB_DETAILS_LOADING,
  JOB_DETAILS_SUCCESS,
  JOB_LIST_FAIL,
  JOB_LIST_LOADING,
  JOB_LIST_SUCCESS,
  UPDATE_JOB_FAIL,
  UPDATE_JOB_LOADING,
  UPDATE_JOB_RESET,
  UPDATE_JOB_SUCCESS,
} from "../constant/jobs.constants";

const initialState: any = {
  jobs: [],
  loading: false,
  error: null,
};

export const jobsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case JOB_LIST_LOADING:
      return {
        loading: true,
      };
    case JOB_LIST_SUCCESS:
      return {
        loading: false,
        jobs: action.payload,
      };
    case JOB_LIST_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return { state };
  }
};

const jobInitialstate: any = {
  job: {},
  loading: false,
  error: null,
};

export const jobReducer = (state = jobInitialstate, action: any) => {
  switch (action.type) {
    case JOB_DETAILS_LOADING:
      return {
        loading: true,
      };
    case JOB_DETAILS_SUCCESS:
      return {
        loading: false,
        job: action.payload,
      };
    case JOB_DETAILS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return { state };
  }
};

export const addjobReducer = (state = {}, action: any) => {
  switch (action.type) {
    case JOB_ADD_LOADING:
      return {
        loading: true,
      };
    case JOB_ADD_SUCCESS:
      return {
        loading: false,
        success: true,
      };
    case JOB_ADD_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return { state };
  }
};

export const updateJobReducer = (state = {}, action: any) => {
  switch (action.type) {
    case UPDATE_JOB_LOADING:
      return {
        loading: true,
      };
    case UPDATE_JOB_SUCCESS:
      return {
        loading: false,
        success: true,
      };
    case UPDATE_JOB_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case UPDATE_JOB_RESET:
      return {};
    default:
      return { state };
  }
};

export const jobApplyReducer = (state = {}, action: any) => {
  switch (action.type) {
    case APPLY_JOB_LOADING:
      return {
        loading: true,
      };
    case APPLY_JOB_SUCCESS:
      return {
        loading: false,
        success: true,
      };
    case APPLY_JOB_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case APPLY_JOB_RESET:
      return {};
    default:
      return { state };
  }
};
