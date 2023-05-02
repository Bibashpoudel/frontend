import axios from "axios";
import { headers } from "../../next-sitemap.config";
import getLocal from "../../utils/getlocal";
import { checkUrl } from "../../utils/url";
import {
  ADD_BLOG_FAIL,
  ADD_BLOG_LOADING,
  ADD_BLOG_SUCESS,
  ADD_CATEGORIES_FAIL,
  ADD_CATEGORIES_LOADING,
  ADD_CATEGORIES_SUCESS,
  DELETE_BLOG_FAIL,
  DELETE_BLOG_LOADING,
  DELETE_BLOG_SUCESS,
  DELETE_CATEGORIES_FAIL,
  DELETE_CATEGORIES_LOADING,
  DELETE_CATEGORIES_SUCESS,
  GET_BLOG_LOADING,
  GET_BLOG_SUCESS,
  GET_CATEGORIES_FAIL,
  GET_CATEGORIES_LOADING,
  GET_CATEGORIES_SUCESS,
  UPDATE_BLOG_FAIL,
  UPDATE_BLOG_LOADING,
  UPDATE_BLOG_SUCESS,
  UPDATE_CATEGORIES_FAIL,
  UPDATE_CATEGORIES_LOADING,
  UPDATE_CATEGORIES_SUCESS,
} from "../constant/blog.constants";
const token = getLocal();
const URL = checkUrl();
export const getBlog = (page: any, size: any) => async (dispatch: any) => {
  try {
    dispatch({
      type: GET_BLOG_LOADING,
    });

    const { data } = await axios.get(
      `${URL}/get-blog?size=${size}&page=${page}`
    );

    dispatch({
      type: GET_BLOG_SUCESS,
      payload: data,
    });
  } catch (error: any) {
    dispatch({
      type: GET_BLOG_LOADING,
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
export const addBlog =
  (title: string, image: string, content: any, tag: [], category: string) =>
  async (dispatch: any) => {
    try {
      dispatch({
        type: ADD_BLOG_LOADING,
        payload: { title, image, content, tag, category },
      });

      const { data } = await axios.post(
        `${URL}/add-blog`,
        {
          title: title,
          file: image,
          content: content,
          tag: tag,
          categories: category,
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
        type: ADD_BLOG_SUCESS,
        payload: data,
      });
    } catch (error: any) {
      dispatch({
        type: ADD_BLOG_FAIL,
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

export const updateBlog =
  (
    id: string,
    title: string,
    image: string,
    content: any,
    tag: [],
    category: string
  ) =>
  async (dispatch: any) => {
    try {
      dispatch({
        type: UPDATE_BLOG_LOADING,
        payload: { title, image, content, tag, category },
      });

      const { data } = await axios.post(
        `${URL}/update-blog?id=${id}`,
        {
          title: title,
          file: image,
          content: content,
          tag: tag,
          categories: category,
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
        type: UPDATE_BLOG_SUCESS,
        payload: data,
      });
    } catch (error: any) {
      dispatch({
        type: UPDATE_BLOG_FAIL,
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

export const deleteBlog = (id: any) => async (dispatch: any) => {
  try {
    dispatch({
      type: DELETE_BLOG_LOADING,
    });

    const { data } = await axios.delete(`${URL}/delete-blog?id=${id}`, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Authorization: `Bearer ${token?.access_token}`,
      },
    });

    dispatch({
      type: DELETE_BLOG_SUCESS,
      payload: data,
    });
  } catch (error: any) {
    dispatch({
      type: DELETE_BLOG_FAIL,
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

// categories actions

export const getCategories =
  (page: any, size: any) => async (dispatch: any) => {
    try {
      dispatch({
        type: GET_CATEGORIES_LOADING,
      });
      const { data } = await axios.get(
        `${URL}/get-categories?size=${size}&page=${page}`
      );

      dispatch({
        type: GET_CATEGORIES_SUCESS,
        payload: data,
      });
    } catch (error: any) {
      dispatch({
        type: GET_CATEGORIES_FAIL,
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

export const addCategoryAction = (name: string) => async (dispatch: any) => {
  try {
    dispatch({
      type: ADD_CATEGORIES_LOADING,
      payload: { name },
    });

    const { data } = await axios.post(
      `${URL}/add-category`,
      {
        name: name,
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
      type: ADD_CATEGORIES_SUCESS,
      payload: data,
    });
  } catch (error: any) {
    dispatch({
      type: ADD_CATEGORIES_FAIL,
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

export const updateCategory =
  (id: string, name: string) => async (dispatch: any) => {
    try {
      dispatch({
        type: UPDATE_CATEGORIES_LOADING,
        payload: { id, name },
      });
      const { data } = await axios.put(
        `${URL}/update-category?id=${id}`,
        {
          name: name,
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
        type: UPDATE_CATEGORIES_SUCESS,
        payload: data,
      });
    } catch (error: any) {
      dispatch({
        type: UPDATE_CATEGORIES_FAIL,
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

export const deleteCategory = (id: string) => async (dispatch: any) => {
  try {
    dispatch({
      type: DELETE_CATEGORIES_LOADING,
      payload: { id },
    });
    const { data } = await axios.delete(`${URL}/delete-category?id=${id}`, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Authorization: `Bearer ${token?.access_token}`,
      },
    });
    dispatch({
      type: DELETE_CATEGORIES_SUCESS,
      payload: data,
    });
  } catch (error: any) {
    dispatch({
      type: DELETE_CATEGORIES_FAIL,
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
