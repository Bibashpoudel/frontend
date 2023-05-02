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
  DETAILS_BLOG_FAIL,
  DETAILS_BLOG_LOADING,
  DETAILS_BLOG_SUCESS,
  GET_BLOG_FAIL,
  GET_BLOG_LOADING,
  GET_BLOG_SUCESS,
  GET_CATEGORIES_FAIL,
  GET_CATEGORIES_LOADING,
  GET_CATEGORIES_SUCESS,
  RESET_BLOG,
  RESET_CATEGORIES,
  UPDATE_BLOG_FAIL,
  UPDATE_BLOG_LOADING,
  UPDATE_BLOG_SUCESS,
  UPDATE_CATEGORIES_FAIL,
  UPDATE_CATEGORIES_LOADING,
  UPDATE_CATEGORIES_SUCESS,
} from "../constant/blog.constants";

const initialState: any = {
  blogs: [],
  loading: false,
  error: null,
};

export const getBlogReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_BLOG_LOADING:
      return {
        loading: true,
      };
    case GET_BLOG_SUCESS:
      return {
        loading: false,
        jobs: action.payload,
      };
    case GET_BLOG_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return { state };
  }
};

const blogInitialstate: any = {
  blog: {},
  loading: false,
  error: null,
};

export const getBlogDetailsReducer = (
  state = blogInitialstate,
  action: any
) => {
  switch (action.type) {
    case DETAILS_BLOG_LOADING:
      return {
        loading: true,
      };
    case DETAILS_BLOG_SUCESS:
      return {
        loading: false,
        job: action.payload,
      };
    case DETAILS_BLOG_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return { state };
  }
};

export const addBlogReducer = (state = {}, action: any) => {
  switch (action.type) {
    case ADD_BLOG_LOADING:
      return {
        loading: true,
      };
    case ADD_BLOG_SUCESS:
      return {
        loading: false,
        success: true,
      };
    case ADD_BLOG_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case RESET_BLOG:
      return {};
    default:
      return { state };
  }
};
export const updateBlogReducer = (state = {}, action: any) => {
  switch (action.type) {
    case UPDATE_BLOG_LOADING:
      return {
        loading: true,
      };
    case UPDATE_BLOG_SUCESS:
      return {
        loading: false,
        success: true,
      };
    case UPDATE_BLOG_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case RESET_BLOG:
      return {};
    default:
      return { state };
  }
};

export const deleteBlogReducer = (state = {}, action: any) => {
  switch (action.type) {
    case DELETE_BLOG_LOADING:
      return {
        loading: true,
      };
    case DELETE_BLOG_SUCESS:
      return {
        loading: false,
        success: true,
      };
    case DELETE_BLOG_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case RESET_BLOG:
      return {};
    default:
      return { state };
  }
};

// Categories

const initialStateCategories: any = {
  categoires: [],
  loading: false,
  error: null,
};

export const getCategoriesReducer = (
  state = initialStateCategories,
  action: any
) => {
  switch (action.type) {
    case GET_CATEGORIES_LOADING:
      return {
        loading: true,
      };
    case GET_CATEGORIES_SUCESS:
      return {
        loading: false,
        jobs: action.payload,
      };
    case GET_CATEGORIES_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return { state };
  }
};
export const addCategoryReducer = (state = {}, action: any) => {
  switch (action.type) {
    case ADD_CATEGORIES_LOADING:
      return {
        loading: true,
      };
    case ADD_CATEGORIES_SUCESS:
      return {
        loading: false,
        success: true,
      };
    case ADD_CATEGORIES_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case RESET_CATEGORIES:
      return {};
    default:
      return { state };
  }
};
export const updateCategoryReducer = (state = {}, action: any) => {
  switch (action.type) {
    case UPDATE_CATEGORIES_LOADING:
      return {
        loading: true,
      };
    case UPDATE_CATEGORIES_SUCESS:
      return {
        loading: false,
        success: true,
      };
    case UPDATE_CATEGORIES_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case RESET_CATEGORIES:
      return {};
    default:
      return { state };
  }
};
export const deleteCategoryReducer = (state = {}, action: any) => {
  switch (action.type) {
    case DELETE_CATEGORIES_LOADING:
      return {
        loading: true,
      };
    case DELETE_CATEGORIES_SUCESS:
      return {
        loading: false,
        success: true,
      };
    case DELETE_CATEGORIES_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case RESET_CATEGORIES:
      return {};
    default:
      return { state };
  }
};
