import axios from "axios";
import getLocal from "../../utils/getlocal";
import { checkUrl } from "../../utils/url";

import {
  APPLY_JOB_FAIL,
  APPLY_JOB_LOADING,
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
  UPDATE_JOB_SUCCESS,
} from "../constant/jobs.constants";
//const URL = process.env.NEXT_PUBLIC_SERVER_URL;

const token = getLocal();
const URL = checkUrl();

export const getJobs = () => async (dispatch: any) => {
  console.log("action run");
  dispatch({
    type: JOB_LIST_LOADING,
  });
  try {
    console.log("action run 2");
    const { data }: any = await axios.get(`${URL}/jobs/get-jobs`, {
      headers: {
        "Access-Control-Allow-Methods": "*",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });

    dispatch({
      type: JOB_LIST_SUCCESS,
      payload: data,
    });
  } catch (error: any) {
    dispatch({
      type: JOB_LIST_FAIL,
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

export const getJobDetails = (slug: any) => async (dispatch: any) => {
  dispatch({
    type: JOB_DETAILS_LOADING,
    payload: { slug },
  });
  try {
    const { data } = await axios.get(`${URL}/jobs/get-job/${slug}`, {
      headers: {
        "Access-Control-Allow-Methods": "*",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
    dispatch({
      type: JOB_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error: any) {
    dispatch({
      type: JOB_DETAILS_FAIL,
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
export const getadminJobs = (page: any, size: any) => async (dispatch: any) => {
  console.log("action run");
  dispatch({
    type: JOB_LIST_LOADING,
  });
  try {
    const { data }: any = await axios.get(
      `${URL}/jobs/admin/get-jobs?page=${page}&size=${size}`,
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          Authorization: `Bearer ${token?.access_token}`,
        },
      }
    );

    dispatch({
      type: JOB_LIST_SUCCESS,
      payload: data,
    });
  } catch (error: any) {
    dispatch({
      type: JOB_LIST_FAIL,
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

export const addJob =
  (title: any, stack: any, content: any, isPreview: any, slug: any) =>
  async (dispatch: any) => {
    dispatch({
      type: JOB_ADD_LOADING,
      payload: { title, stack, content, slug, isPreview },
    });
    try {
      const { data } = await axios.post(
        `${URL}/jobs/add-job`,
        {
          title: title,
          isPreview: isPreview,
          content: content,
          stack: stack,
          slug: slug,
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
        type: JOB_ADD_SUCCESS,
        payload: data,
      });
    } catch (error: any) {
      dispatch({
        type: JOB_ADD_FAIL,
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

export const updateJob =
  (id: any, content: any, ispreview: any) => async (dispatch: any) => {
    dispatch({
      type: UPDATE_JOB_LOADING,
      payload: { id, content, ispreview },
    });
    try {
      const { data } = await axios.put(
        `${URL}/jobs/update/${id}`,
        {
          isPreview: ispreview,
          content: content,
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
        type: UPDATE_JOB_SUCCESS,
        payload: data,
      });
    } catch (error: any) {
      dispatch({
        type: UPDATE_JOB_FAIL,
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

export const applyJobAction =
  (
    fullName: any,
    email: any,
    phone: any,
    intro: any,
    file: any,
    position: any
  ) =>
  async (dispatch: any) => {
    dispatch({
      type: APPLY_JOB_LOADING,
      payload: { fullName, email, phone, intro, file, position },
    });

    try {
      const { data } = await axios.post(
        `${URL}/jobs/apply/jobs`,
        {
          fullName,
          email,
          phone,
          intro,
          file,
          position,
        },
        {
          headers: {
            "Access-Control-Allow-Methods": "*",
            "Content-Type": "multipart/form-data",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
      console.log(data);
      dispatch({
        type: APPLY_JOB_SUCCESS,
        payload: data,
      });
    } catch (error: any) {
      dispatch({
        type: APPLY_JOB_FAIL,
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

export const getApplyJob =
  (page: any, size: any, selected: any) => async (dispatch: any) => {
    dispatch({
      type: JOB_ADD_LOADING,
    });
    try {
      const { data } = await axios.get(
        `${URL}/jobs/apply/get-jobs?size=${size}&page=${page}&selected=${selected}`
      );
      dispatch({
        type: JOB_LIST_SUCCESS,
        payload: data,
      });
    } catch (error: any) {
      dispatch({
        type: JOB_LIST_FAIL,
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
